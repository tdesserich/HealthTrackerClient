import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CurrentMedsUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',  
            medicationName: '',
            reason: '',
            dosage: '',
            frequency: '',
            startDate: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.currentMeds.id, // Mod 7, Step 4
            medicationName: this.props.currentMeds.medicationName,
            reason: this.props.currentMeds.reason,
            dosage: this.props.currentMeds.dosage,
            frequency: this.props.currentMeds.frequency,
            startDate: this.props.currentMeds.startDate
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                                <Label for="reason">Reason for taking</Label>
                                <Input type="text" name="reason" id="reason" value={this.state.reason} onChange={this.handleChange} placeholder="Ex: Allergies, Acid reflux, Vitamin" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dosage">Dosage</Label>
                                <Input id="dosage" type="text" name="dosage" value={this.state.dosage} placeholder="Ex: 10mg" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="frequency">Frequency</Label>
                                <Input id="frequency" type="text" name="frequency" value={this.state.frequency} placeholder="Ex: Once a day, At bedtime" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="startDate">Start date</Label>
                                <Input id="startDate" type="text" name="startDate" value={this.state.startDate} placeholder="Enter medication start date" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}> Submit </Button>
                        </Form>
                    </ModalBody>    
            </Modal>
        </div>
                )
            }
        }
        
export default CurrentMedsUpdate;