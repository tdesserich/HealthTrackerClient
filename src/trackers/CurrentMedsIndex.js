import React, { Component } from 'react';
import CurrentMedsCreate from './CurrentMedsCreate';
import CurrentMedsDisplay from './CurrentMedsDisplay';
import CurrentMedsUpdate from './CurrentMedsUpdate';
import { Container, Row, Col } from 'reactstrap';

class CurrentMedsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMeds: [],
            updatePressed: false,
            currentMedsToUpdate: {}

        }
    }

    componentWillMount() {
        this.fetchCurrentMeds()
    }

    fetchCurrentMeds = () => {
        fetch("http://localhost:3000/currentmeds", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((data) => {
                return this.setState({ currentMeds: data })
            })
    }

    currentMedsUpdate = (event, updatedMeds) => { 
        fetch(`http://localhost:3000/currentmeds/${updatedMeds.id}`, {
            method: 'PUT', 
            body: JSON.stringify({ currentMeds: updatedMeds }), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false }) 
                this.fetchCurrentMeds(); 
            })
    }
    
    setUpdatedMeds = (event, currentMed) => {
        this.setState({
            currentMedsToUpdate: currentMed, 
            updatePressed: true 
        })
    }

    currentMedsDelete = (event, deletedMeds) => { 
        fetch(`http://localhost:3000/currentmeds/${deletedMeds.id}`, {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchCurrentMeds(); 
            })
    }



    
    render() {
        const currentMeds = this.state.currentMeds.length >= 1 ?
            <CurrentMedsDisplay currentMeds={this.state.currentMeds}
                delete={this.currentMedsDelete} update={this.setUpdatedMeds} /> : 
                <h2 style={{borderBottom: "1px solid grey"}}>Log a current medication to see results</h2>
        return (
            
            <Container className="display">
                <Row>
                    <Col md="3">
                        <CurrentMedsCreate token={this.props.token} updateCurrentMedsArray={this.fetchCurrentMeds} />
                    </Col>
                    <Col md="9">
                        {currentMeds}
                    </Col>
                </Row>
                <Col md="12">                      
                    {     
                        this.state.updatePressed ? <CurrentMedsUpdate update={this.currentMedsUpdate} currentMeds={this.state.currentMedsToUpdate} />
                        : <div></div>
                    } 
                </Col>

            </Container>
            
        )
    }
}


export default CurrentMedsIndex;