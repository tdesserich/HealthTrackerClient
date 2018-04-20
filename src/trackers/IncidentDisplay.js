import React from 'react';
import { Table, Button } from 'reactstrap';
import '../App.css'

const IncidentDisplay = (props) => {
    return (
        <div className="display">
        <h3 style={{borderBottom: "1px solid gray"}}>Surgeries, Hospitalizations, or Events</h3>
        <br/>
            <Table bordered>
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
                <td style={{ fontWeight: "bold" }}>{incident.event}</td>
                <td>{incident.date}</td>
                <td>{incident.description}</td>
                <td> 
                   <div className="button">                
                    <Button id={incident.id} onClick={e => props.update(e, incident)} color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}>Update</Button>
                    <Button id={incident.id} onClick={e => props.delete(e, incident)} color="secondary" style={{margin: "0px 10px 10px 10px", height: "40px", width: "80px"}}>Delete</Button>
                    </div>  
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