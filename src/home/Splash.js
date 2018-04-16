import React, { Component } from 'react';
import CurrentMedsIndex from '../trackers/CurrentMedsIndex'

const Splash = (props) => {
    return (
        <div>
            <CurrentMedsIndex token={props.sessionToken} />
        </div>    
    )
}

export default Splash;