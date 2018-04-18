import React, { Component } from 'react';
import CurrentMedsIndex from '../trackers/DiscMedsIndex';
import DiscMedsIndex from '../trackers/CurrentMedsIndex';
import IncidentIndex from '../trackers/IncidentIndex';

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Button,
    Collapse,
    Nav,
    NavLink, 
    NavbarToggler
} from 'reactstrap';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    
    render() {
        return (
              <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Health Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Current Meds</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/discmeds">Discontinued Meds</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/incidents">Medical Events</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
      )
    }
  }


export default SiteBar;