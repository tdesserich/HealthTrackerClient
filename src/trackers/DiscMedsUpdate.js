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

class DiscMedsUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',  
            medicationName: '',
            reason: '',
            dosage: '',
            frequency: '',
            endDate: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.discMeds.id, // Mod 7, Step 4
            medicationName: this.props.discMeds.medicationName,
            reason: this.props.discMeds.reason,
            dosage: this.props.discMeds.dosage,
            endDate: this.props.discMeds.startDate
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
                                <Label for="endDate">Medication start date</Label>
                                <Input id="endDate" type="text" name="endDate" value={this.state.startDate} placeholder="Enter medication end date" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>    
            </Modal>
        </div>
                )
            }
        }
        
export default DiscMedsUpdate;