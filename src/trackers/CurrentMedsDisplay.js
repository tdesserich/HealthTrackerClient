import React from 'react';
import { Row, Col, Button, CardDeck, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../App.css'

const CurrentMedsDisplay = (props) => {
    return (
        <div className="display">
            <h3 style={{borderBottom: "1px solid gray"}}>Current Medications</h3>
       
            <CardDeck>
                {props.currentMeds.map((currentMeds, id) => {
                    return (
                        <Col lg="4" key={id}>
                            <Row className="h-100">
                                <Card className="text-center" body outline color="secondary">
                                    <CardBody className="text-center">
                                        <CardTitle style={{ fontWeight: "bold" }}>{currentMeds.medicationName}</CardTitle>
                                        <CardText style={{ fontWeight: "bold" }}>Reason for taking:</CardText>
                                        <CardText>{currentMeds.reason}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Frequency:</CardText>
                                        <CardText>{currentMeds.frequency}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Dosage:</CardText>
                                        <CardText>{currentMeds.dosage}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Start date:</CardText>
                                        <CardText>{currentMeds.startDate}</CardText>
                                        <Button id={currentMeds.id} onClick={e => props.update(e, currentMeds)} color="secondary" size="sm">Update</Button>|
                                        <Button id={currentMeds.id} onClick={e => props.delete(e, currentMeds)} color="secondary" size="sm">Delete</Button>
                                    </CardBody>
                                </Card>
                            </Row>
                        </Col>
                    )
                })
                }
            </CardDeck>
        </div>
    );
}

export default CurrentMedsDisplay;