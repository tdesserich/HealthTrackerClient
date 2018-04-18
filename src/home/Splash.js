import React, { Component } from 'react';
import CurrentMedsIndex from '../trackers/CurrentMedsIndex'
import DiscMedsIndex from '../trackers/DiscMedsIndex'
import IncidentIndex from '../trackers/IncidentIndex'

const Splash = (props) => {
    return (
        <div>
            <CurrentMedsIndex token={props.sessionToken} />
            <br/>
            <DiscMedsIndex token={props.sessionToken} />
            <br/>
            <IncidentIndex token={props.sessionToken} />
        </div>    
    )
}

export default Splash;