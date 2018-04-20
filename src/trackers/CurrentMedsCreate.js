import React, { Component } from 'react';
import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

class CurrentMedsCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            medicationName: '',
            reason: '',
            dosage: '',
            frequency: '',
            startDate: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }            
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/currentmeds/', {
            method: 'POST',
            body: JSON.stringify({ currentMeds: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.props.updateCurrentMedsArray();
            this.setState({
                id:'',
                medicationName: '',
                reason: '',
                dosage: '',
                frequency: '',
                startDate: ''
            })
        })
    }
    
    render() {
        return (
            <div className="log"> 
            <h4 style={{borderBottom: "1px solid grey"}}>Log a Current Medication</h4>
            
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="medicationName">Medication name</Label>
                    <Input id="medicationName" type="text" name="medicationName" value={this.state.medicationName} placeholder="Enter medication name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="reason">Reason for taking</Label>
                    <Input type="reason" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
                </FormGroup>
                <FormGroup>
                    <Label for="dosage">Dosage</Label>
                    <Input id="dosage" type="text" name="dosage" value={this.state.dosage} placeholder="Ex: 10mg" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="frequency">Medication frequency</Label>
                    <Input id="frequency" type="text" name="frequency" value={this.state.frequency} placeholder="Ex: Once a day, At bedtime" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="startDate">Medication start date</Label>
                    <Input id="startDate" type="text" name="startDate" value={this.state.startDate} placeholder="Enter medication start date" onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit" color="secondary"> Submit </Button>
            </Form>
        </div>
        )
    }
}

export default CurrentMedsCreate;