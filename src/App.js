import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './site/SiteBar';
import Footer from './site/Footer';
import CurrentMedsIndex from './trackers/CurrentMedsIndex';
import DiscMedsIndex from './trackers/DiscMedsIndex';
import IncidentIndex from './trackers/IncidentIndex';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


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

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path='/' exact>
            <CurrentMedsIndex token={this.state.sessionToken} />
          </Route>
          <Route path='/discmeds' exact>
            <DiscMedsIndex token={this.state.sessionToken} />
          </Route>
          <Route path='/incidents' exact>
            <IncidentIndex token={this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path="/auth" >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }
  }

  render() {
    return (
      <div className="outerContainer">
        <Router>
          <div className="appDiv">
            <SiteBar token={this.state.sessionToken} clickLogout={this.logout} />
            {this.protectedViews()}
           </div>
        </Router>
        <Footer className="footerStyle"/>
      </div>
    );
  }
}

export default App;
