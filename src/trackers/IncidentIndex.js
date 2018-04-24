import React, { Component } from 'react';
import IncidentCreate from './IncidentCreate';
import IncidentDisplay from './IncidentDisplay';
import IncidentUpdate from './IncidentUpdate';
import { Container, Row, Col } from 'reactstrap';

class IncidentIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incident: [],
            updatePressed: false,
            incidentToUpdate: {}

        }
    }

    componentWillMount() {
        this.fetchIncident()
    }

    fetchIncident = () => {
        fetch("https://tdesserich-healthtrackerserver.herokuapp.com/incident", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((data) => {
                return this.setState({ incident: data })
            })
    }

   incidentUpdate = (event, updatedIncident) => { 
        fetch(`https://tdesserich-healthtrackerserver.herokuapp.com/incident/${updatedIncident.id}`, {
            method: 'PUT', 
            body: JSON.stringify({ incident: updatedIncident }), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false }) 
                this.fetchIncident(); 
            })
    }
    
    setUpdatedIncident = (event, incident) => { //currentMed
        this.setState({
            incidentToUpdate: incident, //currentMed
            updatePressed: true 
        })
    }


    incidentDelete = (event, updatedIncident) => { 
        fetch(`https://tdesserich-healthtrackerserver.herokuapp.com/${updatedIncident.id}`, {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchIncident(); 
            })
    }
    
    render() {
        const incident = this.state.incident.length >= 1 ?
            <IncidentDisplay incidentIndex={this.state.incident} delete={this.incidentDelete} update={this.setUpdatedIncident} /> 
            : <h2 style={{borderBottom: "1px solid grey"}}>Log a medical event to see results</h2>
        return (
            <Container className="display">
                <Row>
                    <Col md="3">
                        <IncidentCreate token={this.props.token} updateIncidentArray={this.fetchIncident} />
                    </Col>
                    <Col md="9">
                        {incident}
                    </Col>
                </Row>
                <Col md="12">                      
                    {     
                        this.state.updatePressed ? <IncidentUpdate update={this.incidentUpdate} incident={this.state.incidentToUpdate} />
                        : <div></div>
                    } 
                </Col>
            </Container>
        )
    }
}


export default IncidentIndex;