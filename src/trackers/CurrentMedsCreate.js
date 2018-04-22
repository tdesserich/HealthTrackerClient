import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
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
            startDate: '',
            datePickerStartDate: moment()
        };
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }            
    
    handleDateChange = (date) => {
        this.setState({
          startDate: date.format('L'),
          datePickerStartDate: date
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
                startDate: '',
                datePickerStartDate: moment()
            })
        })
    }
    
    render() {
        return (
            <div className="log"> 
            <br/>
            <h4 style={{borderBottom: "1px solid grey"}}>Log a Current Medication</h4>
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="medicationName">Medication name</Label>
                    <Input id="medicationName" type="text" name="medicationName" value={this.state.medicationName} onChange={this.handleChange} placeholder="Enter medication name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="reason">Reason for taking</Label>
                    <Input id="reason" type="reason" name="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
                </FormGroup>
                <FormGroup>
                    <Label for="dosage">Dosage</Label>
                    <Input id="dosage" type="text" name="dosage" value={this.state.dosage} onChange={this.handleChange} placeholder="Ex: 10mg"/>
                </FormGroup>
                <FormGroup>
                    <Label for="frequency">Medication frequency</Label>
                    <Input id="frequency" type="text" name="frequency" value={this.state.frequency} placeholder="Ex: Once a day, At bedtime" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="startDate">Medication start date</Label>
                    <DatePicker
                        customInput={<Input />}
                        onChange={this.handleDateChange}
                        selected={this.state.datePickerStartDate}
                        readOnly
                    />     
                </FormGroup>
                <Button type="submit" color="secondary" style={{height: "40px", width: "80px"}}> Submit </Button>
            </Form>
        </div>
        )
    }
}

export default CurrentMedsCreate;