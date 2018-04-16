import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

class CurrentMedsUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',  //CHECK THIS
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
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }

    componentWillMount() {
        this.setState({
            id: this.props.currentMeds.id,
            medicationName: this.props.currentMeds.medicationName,
            reason: this.props.currentMeds.reason,
            dosage: this.props.currentMeds.dosage,
            startDate: this.props.currentMeds.startDate
        })
    }


    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Log a Medication</ModalHeader>
                    <ModalBody>
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
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>    
            </Modal>
        </div>
                )
            }
        }
        
export default CurrentMedsUpdate;