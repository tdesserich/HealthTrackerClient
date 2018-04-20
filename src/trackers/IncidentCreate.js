import React, { Component } from 'react';
import { Form, FormGroup, Button, Label, Input } from 'reactstrap';

class IncidentCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            event: '',
            date: '',
            description: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }            
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/incident/', {
            method: 'POST',
            body: JSON.stringify({ incident: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.props.updateIncidentArray();
            this.setState({
                id:'',
                event: '',
                date: '',
                description: ''
            })
        })
    }
    
    render() {
        return (
            <div className="log"> 
            <h4 style={{borderBottom: "1px solid grey"}}>Log a Medical Event</h4>
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="event">Event name</Label>
                    <Input id="event" type="text" name="event" value={this.state.event} placeholder="Ex: Surgery, Seizure, Illness" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="text" name="date" id="date" value={this.state.date} onChange={this.handleChange} placeholder="Date" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description or notes</Label>
                    <Input id="description" type="text" name="description" value={this.state.description} placeholder="Description of event" onChange={this.handleChange} />
                </FormGroup> 
                <Button type="submit" color="secondary" style={{height: "40px", width: "80px"}}> Submit </Button>
            </Form>
        </div>
        )
    }
}

export default IncidentCreate;