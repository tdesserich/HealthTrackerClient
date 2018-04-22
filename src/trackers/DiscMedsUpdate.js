import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { FormGroup, Form, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class DiscMedsUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',  
            medicationName: '',
            reason: '',
            dosage: '',
            frequency: '',
            endDate: '',
            datePickerEndDate: moment()
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.discMeds.id, // Mod 7, Step 4
            medicationName: this.props.discMeds.medicationName,
            reason: this.props.discMeds.reason,
            dosage: this.props.discMeds.dosage,
            frequency: this.props.discMeds.frequency,
            endDate: this.props.discMeds.endDate,
            datePickerEndDate: moment(this.props.discMeds.endDate, 'L')
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDateChange = (date) => {
        
        this.setState({
          endDate: date.format('L'),
          datePickerEndDate: date
        });
      }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader>Update a Medication</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="medicationName">Medication name</Label>
                                <Input id="medicationName" type="text" name="medicationName" value={this.state.medicationName} placeholder="Enter medication name" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="reason">Reason for discontinuing</Label>
                                <Input type="text" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
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
                    </ModalBody>    
            </Modal>
        </div>
                )
            }
        }
        
export default DiscMedsUpdate;