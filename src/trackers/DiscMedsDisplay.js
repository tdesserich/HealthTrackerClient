import React from 'react';
import {
    Table,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardDeck,
    CardFooter,
    Col,
    Row
} from 'reactstrap';

const DiscMedsDisplay = (props) => {
    return (
        <div>
            <h3>Discontinued Medications</h3>
            <hr />
            <CardDeck>
                {props.discMeds.map((discMeds, id) => {
                    return (
                        <Col md="4">
                            <Row className="h-100">
                                <Card className="text-center" key={id}>
                                    <CardBody className="text-center">
                                        <CardTitle>{discMeds.medicationName}</CardTitle>
                                        <CardText style={{ fontWeight: "bold" }}>Reason for taking:</CardText>
                                        <CardText>{discMeds.reason}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Reason for discontinuing:</CardText>
                                        <CardText>{discMeds.reaction}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Frequency:</CardText>
                                        <CardText>{discMeds.frequency}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Dosage:</CardText>
                                        <CardText>{discMeds.dosage}</CardText>
                                        <CardText style={{ fontWeight: "bold" }}>Start date:</CardText>
                                        <CardText>{discMeds.startDate}</CardText>
                                        <Button id={discMeds.id} onClick={e => props.delete(e, discMeds)} color="danger" size="sm">Delete</Button>|
                                    <Button id={discMeds.id} onClick={e => props.update(e, discMeds)} color="warning" size="sm">Update</Button>
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