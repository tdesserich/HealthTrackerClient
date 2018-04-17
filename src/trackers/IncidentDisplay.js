import React from 'react';
import {
    Table,
    Button
} from 'reactstrap';

const IncidentDisplay = (props) => {
    return (
        <div>
            <h3>Surgeries, Hospitalizations, or Event</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                props.incidentIndex.map((incident, id) => {
        return ( 
            <tr key={id}> 
                <th scope="row">{incident.id}</th>
                <td>{incident.event}</td>
                <td>{incident.date}</td>
                <td>{incident.description}</td>
                <td>                
                    <Button id={incident.id} onClick={props.delete} color="danger">Delete</Button>|
                    <Button id={incident.id} onClick={e => props.update(e, incident)} color="warning">Update</Button>
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

export default IncidentDisplay;