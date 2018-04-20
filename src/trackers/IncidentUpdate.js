import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class IncidentUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',  
            event: '',
            date: '',
            description: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.incident.id, // Mod 7, Step 4
            event: this.props.incident.event,
            date: this.props.incident.date,
            description: this.props.incident.description
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
                    <ModalHeader>Update a Medical Incident</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="event">Event</Label>
                                <Input id="event" type="text" name="event" value={this.state.event} placeholder="Update an event" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input type="text" name="date" id="date" value={this.state.date} onChange={this.handleChange} placeholder="Date" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input id="description" type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}> Submit </Button>
                        </Form>
                    </ModalBody>    
            </Modal>
        </div>
                )
            }
        }
        
export default IncidentUpdate;