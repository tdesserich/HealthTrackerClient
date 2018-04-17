import React from 'react';
import {
    Table,
    Button
} from 'reactstrap';

const DiscMedsDisplay = (props) => {
    return (
        <div>
            <h3>Discontinued Medications</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Medication Name</th>
                        <th>Reason for Discontinuing</th>
                        <th>Reaction</th>
                        <th>Dosage</th>
                        <th>Frequency</th>
                        <th>End Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                props.discMeds.map((discMeds, id) => { 
        return ( 
            <tr key={id}> 
                <th scope="row">{discMeds.id}</th>
                <td>{discMeds.medicationName}</td>
                <td>{discMeds.reason}</td>
                <td>{discMeds.reaction}</td>
                <td>{discMeds.frequency}</td>
                <td>{discMeds.dosage}</td>
                <td>{discMeds.startDate}</td>
                <td>                
                    <Button id={discMeds.id} onClick={props.delete} color="danger">Delete</Button>|
                    <Button id={discMeds.id} onClick={e => props.update(e, discMeds)} color="warning">Update</Button>
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

export default DiscMedsDisplay;