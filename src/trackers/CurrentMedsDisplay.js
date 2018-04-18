import React from 'react';
import {
    Table,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardDeck,
    CardGroup,
    Row,
    Col,
    CardFooter
} from 'reactstrap';

const CurrentMedsDisplay = (props) => {
    return (
        <div>
            <h3>Current Medications</h3>
            <hr />
            <CardDeck>
                {props.currentMeds.map((currentMeds, id) => {
                    return (
                        <Col md="4">
                            <Row className="h-100">
                                <Card className="text-center" key={id}>
                                    <CardBody className="text-center">
                                        <CardTitle>{currentMeds.medicationName}</CardTitle>
                                        <CardText style={{ fontWeight: "bold" }}>Reason for taking:</CardText>
                                        <CardText>{currentMeds.reason}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Frequency:</CardText>
                                        <CardText>{currentMeds.frequency}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Dosage:</CardText>
                                        <CardText>{currentMeds.dosage}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Start date:</CardText>
                                        <CardText>{currentMeds.startDate}</CardText>
                                        <Button id={currentMeds.id} onClick={e => props.delete(e, currentMeds)} color="danger" size="sm">Delete</Button>|
                                        <Button id={currentMeds.id} onClick={e => props.update(e, currentMeds)} color="warning" size="sm">Update</Button>
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