import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Button, Collapse, Nav, NavLink, NavbarToggler } from 'reactstrap';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
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
                <Navbar className="navbarStyle" light expand="md">
                    <NavbarBrand href="/">Medical Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    {this.props.token === localStorage.getItem('token') ?
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
                                    <Button onClick={() => this.props.clickLogout()} className="buttonStyle">Logout</Button>
                                </NavItem>
                            </Nav>
                            : ''
                        }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default SiteBar;
