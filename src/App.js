import React, { Component } from 'react';
import Navbar from './home/Navbar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''  
    }
  }

componentWillMount() {
    const token = localStorage.getItem('token'); 
    if (token && !this.state.sessionToken) {   
      this.setState({ sessionToken: token });
    }
}

setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
}
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
