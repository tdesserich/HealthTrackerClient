import React, { Component } from 'react';
import CurrentMedsIndex from '../trackers/CurrentMedsIndex'
import IncidentIndex from '../trackers/IncidentIndex'

const Splash = (props) => {
    return (
        <div>
            <CurrentMedsIndex token={props.sessionToken} />
            <IncidentIndex token={props.sessionToken} />
        </div>    
    )
}

export default Splash;