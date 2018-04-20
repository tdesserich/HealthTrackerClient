import React, { Component } from 'react';
import DiscMedsCreate from './DiscMedsCreate';
import DiscMedsDisplay from './DiscMedsDisplay';
import DiscMedsUpdate from './DiscMedsUpdate';
import { Container, Row, Col } from 'reactstrap';

class DiscMedsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            discMeds: [],
            updatePressed: false,
            discMedsToUpdate: {}

        }
    }

    componentWillMount() {
        this.fetchDiscMeds()
    }

    fetchDiscMeds = () => {
        fetch("http://localhost:3000/discmeds", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((data) => {
                return this.setState({ discMeds: data })
            })
    }

    discMedsUpdate = (event, updatedMeds) => { 
        fetch(`http://localhost:3000/discmeds/${updatedMeds.id}`, {
            method: 'PUT', 
            body: JSON.stringify({ discMeds: updatedMeds }), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false }) 
                this.fetchDiscMeds(); 
            })
    }
    
    setUpdatedMeds = (event, discMed) => {
        this.setState({
            discMedsToUpdate: discMed, 
            updatePressed: true 
        })
    }

    discMedsDelete = (event, deletedMeds) => { 
        fetch(`http://localhost:3000/discmeds/${deletedMeds.id}`, {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchDiscMeds(); 
            })
    }
    
    render() {
        const discMeds = this.state.discMeds.length >= 1 ?
            <DiscMedsDisplay discMeds={this.state.discMeds}
                delete={this.discMedsDelete} update={this.setUpdatedMeds} /> : <h2 style={{borderBottom: "1px solid grey"}}>Log a discontinued medication to see results</h2>
        return (
            <Container className="results">
                <Row>
                    <Col md="3">
                        <DiscMedsCreate token={this.props.token} updateDiscMedsArray={this.fetchDiscMeds} />
                    </Col>
                    <Col md="9">
                        {discMeds}
                    </Col>
                </Row>
                <Col md="12">                      
                    {     
                        this.state.updatePressed ? <DiscMedsUpdate update={this.discMedsUpdate} discMeds={this.state.discMedsToUpdate} />
                        : <div></div>
                    } 
                </Col>
            </Container>
        )
    }
}


export default DiscMedsIndex;