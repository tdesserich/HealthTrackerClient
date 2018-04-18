import React, { Component } from 'react';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';

class DiscMedsCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            medicationName: '',
            reason: '',
            reaction: '',
            dosage: '',
            frequency: '',
            endDate: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }            
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/discmeds/', {
            method: 'POST',
            body: JSON.stringify({ discMeds: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.props.updateDiscMedsArray();
            this.setState({
                id:'',
                medicationName: '',
                reason: '',
                reaction: '',
                dosage: '',
                frequency: '',
                endDate: ''
            })
        })
    }
    
    render() {
        return (
            <div>
            <h3>Log a Discontinued Medication</h3>
            <hr />
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="medicationName">Medication name</Label>
                    <Input id="medicationName" type="text" name="medicationName" value={this.state.medicationName} placeholder="Enter medication name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="reason">Reason for discontinuing</Label>
                    <Input type="reason" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
                </FormGroup>
                <FormGroup>
                    <Label for="reaction">Adverse reaction to medication</Label>
                    <Input type="text" name="reaction" id="reaction" value={this.state.reaction} onChange={this.handleChange} placeholder="Ex: Rash, Stomache ache" />
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
                    <Label for="endDate">Medication end date</Label>
                    <Input id="endDate" type="text" name="endDate" value={this.state.startDate} placeholder="Enter medication end date" onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit" color="primary"> Submit </Button>
            </Form>
        </div>
        )
    }
}

export default DiscMedsCreate;