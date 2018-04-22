import React from 'react';
import { Table, Button } from 'reactstrap';

const IncidentDisplay = (props) => {
    return (
        <div className="display">
            <h3 style={{ borderBottom: "1px solid gray" }}>Surgeries, Hospitalizations, or Events</h3>
            <br />

                <Table bordered responsive className="incidentTable">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th style={{ width: "100px" }}></th>
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
                                        <td >
                                
                                                <Button id={incident.id} onClick={e => props.update(e, incident)} className="buttonStyle">Update</Button>
                                                <Button id={incident.id} onClick={e => props.delete(e, incident)} className="buttonStyle">Delete</Button>
                                           
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