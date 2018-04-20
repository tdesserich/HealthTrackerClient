import React from 'react';
import { Col, Row, Button, CardDeck, Card, CardBody, CardHeader, CardTitle, CardText } from 'reactstrap';

const DiscMedsDisplay = (props) => {
    return (
        <div className="display">
            <h3 style={{borderBottom: "1px solid gray"}}>Discontinued Medications</h3>
            <CardDeck>
                {props.discMeds.map((discMeds, id) => {
                    return (
                        <Col lg="4">
                            <Row className="h-100">
                                <Card className="text-center" key={id}>
                                <CardHeader style={{ fontWeight: "bold" }}>{discMeds.medicationName}</CardHeader>
                                    <CardBody className="text-center">
                                        <CardText style={{ fontWeight: "bold" }}>Reason for taking:</CardText>
                                        <CardText>{discMeds.reason}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Adverse reaction:</CardText>
                                        <CardText>{discMeds.reaction}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Dosage:</CardText>
                                        <CardText>{discMeds.dosage}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Frequency:</CardText>
                                        <CardText>{discMeds.frequency}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>End date:</CardText>
                                        <CardText>{discMeds.endDate}</CardText>
                                        <Button id={discMeds.id} onClick={e => props.update(e, discMeds)} color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}>Update</Button>
                                        <Button id={discMeds.id} onClick={e => props.delete(e, discMeds)} color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}>Delete</Button>
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

export default DiscMedsDisplay;