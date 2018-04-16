import React, { Component } from 'react';
import CurrentMedsCreate from './CurrentMedsCreate';
import CurrentMedsDisplay from './CurrentMedsDisplay';
import CurrentMedsUpdate from './CurrentMedsUpdate';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

class CurrentMedsIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMeds: [],
            updatePressed: false,
            createMedsToUpdate: {}

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
            .then((logData) => {
                return this.setState({ currentMeds: logData })
            })
    }

    currentMedsUpdate = (event, updatedMeds) => { // PROBLEM HERE
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
    
    render() {
        const currentMeds = this.state.currentMeds.length >= 1 ?
            <CurrentMedsDisplay currentMeds={this.state.currentMeds}
                delete={this.currentMedsDelete} update={this.currentMedsUpdate} /> : <h2>Log a medication to see results</h2>
        return (
            <Container>
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
                        this.state.updatePressed ? <this.CurrentMedsUpdate t={this.state.updatePressed} update={this.CurrentMedsUpdate} currentMeds={this.state.currentMedsUpdate} />
                        : <div></div>
                    }
                </Col>
            </Container>
        )
    }
}

export default CurrentMedsIndex;