import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

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
            endDate: '',
            datePickerEndDate: moment()        
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }            
    
    handleDateChange = (date) => {
        
        this.setState({
          endDate: date.format('L'),
          datePickerEndDate: date
        });
      }
    
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://tdesserich-healthtrackerserver.herokuapp.com/discmeds/', {
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
                endDate: '',
                datePickerEndDate: moment()
            })
        })
    }
    
    render() {
        return (
            <div className="log"> 
            <br/>
            <h4 style={{borderBottom: "1px solid grey"}}>Log a Discontinued Medication</h4>

            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label for="medicationName">Medication name</Label>
                    <Input id="medicationName" type="text" name="medicationName" value={this.state.medicationName} placeholder="Enter medication name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="reason">Reason for taking medication</Label>
                    <Input type="text" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
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
                    <DatePicker
                        customInput={<Input />}
                        onChange={this.handleDateChange}
                        selected={this.state.datePickerEndDate}
                        readOnly
                    />               
                </FormGroup>
                <Button type="submit" color="secondary" style={{height: "40px", width: "80px"}}> Submit </Button>
            </Form>
        </div>
        )
    }
}

export default DiscMedsCreate;