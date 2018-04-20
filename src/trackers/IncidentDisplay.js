import React from 'react';
import { Table, Button } from 'reactstrap';

const IncidentDisplay = (props) => {
    return (
        <div className="display">
        <h3 style={{borderBottom: "1px solid gray"}}>Surgeries, Hospitalizations, or Events</h3>
        <br/>
            <Table striped>
                <thead>
                    <tr>
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
                {/* <th scope="row">{incident.id}</th> */}
                <td>{incident.event}</td>
                <td>{incident.date}</td>
                <td>{incident.description}</td>
                <td>                
                    <Button id={incident.id} onClick={e => props.delete(e, incident)} color="danger" size="sm">Delete</Button>| 
                    <Button id={incident.id} onClick={e => props.update(e, incident)} color="warning" size="sm">Update</Button>
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