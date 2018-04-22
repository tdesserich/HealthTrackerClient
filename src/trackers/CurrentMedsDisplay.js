import React from 'react';
import { Row, Col, Button, CardDeck, Card, CardBody, CardHeader, CardText } from 'reactstrap';


const CurrentMedsDisplay = (props) => {
    return (
        <div className="display">
            <h3 style={{borderBottom: "1px solid gray"}}>Current Medications</h3>
            <CardDeck>
                {props.currentMeds.map((currentMeds, id) => {
                    return (
                        <Col lg="4" key={id}>
                            <Row className="h-100">
                            <Card className="cardStyle">
                                <CardHeader style={{ fontWeight: "bold" }}>{currentMeds.medicationName}</CardHeader>
                                    <CardBody>
                                        <CardText style={{ fontWeight: "bold" }}>Reason for taking:</CardText>
                                        <CardText>{currentMeds.reason}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Dosage:</CardText>
                                        <CardText>{currentMeds.dosage}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Frequency:</CardText>
                                        <CardText>{currentMeds.frequency}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Start date:</CardText>
                                        <CardText>{currentMeds.startDate}</CardText>
                                        <Button id={currentMeds.id} onClick={e => props.update(e, currentMeds)} className="buttonStyle">Update</Button>
                                        <Button id={currentMeds.id} onClick={e => props.delete(e, currentMeds)} className="buttonStyle">Delete</Button>
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