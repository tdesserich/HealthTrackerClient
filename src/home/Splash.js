import React, { Component } from 'react';
import CurrentMedsIndex from '../trackers/CurrentMedsIndex'
import DiscMedsIndex from '../trackers/DiscMedsIndex'
import IncidentIndex from '../trackers/IncidentIndex'

const Splash = (props) => {
    return (
        <div>
            <CurrentMedsIndex token={props.sessionToken} />
            <DiscMedsIndex token={props.sessionToken} />
            <IncidentIndex token={props.sessionToken} />
        </div>    
    )
}

export default Splash;