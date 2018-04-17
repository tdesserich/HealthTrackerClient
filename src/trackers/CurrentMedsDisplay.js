import React from 'react';
import {
    Table,
    Button
} from 'reactstrap';

const CurrentMedsDisplay = (props) => {
    return (
        <div>
            <h3>Current Medications</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Medication Name</th>
                        <th>Reason for Taking</th>
                        <th>Dosage</th>
                        <th>Frequency</th>
                        <th>Start Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                props.currentMeds.map((currentMeds, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{currentMeds.id}</th>
                <td>{currentMeds.medicationName}</td>
                <td>{currentMeds.reason}</td>
                <td>{currentMeds.frequency}</td>
                <td>{currentMeds.dosage}</td>
                <td>{currentMeds.startDate}</td>
                <td>                
                    <Button id={currentMeds.id} onClick={props.delete} color="danger">Delete</Button>|
                    <Button id={currentMeds.id} onClick={e => props.update(e, currentMeds)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}
                </tbody>
            </Table>
        </div>
    );
}

export default CurrentMedsDisplay;