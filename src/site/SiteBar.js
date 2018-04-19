import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Button, Collapse, Nav, NavLink, NavbarToggler } from 'reactstrap';
import './site.css'

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

    protectedNavViews = () => {
        if (this.props.token === localStorage.getItem('token')) {
            return (
                <Navbar className="navbar">
                    <NavbarBrand href="/" className="navbarBrand">Health Tracker</NavbarBrand>
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
                </Navbar>
                )
        // } else {
        //         <Nav className="ml-auto" navbar>     
        //         </Nav>
        }
    }

    render() {
        return (
            <div>
                <Navbar className="navbar">
                    <NavbarBrand href="/" className="navbarBrand">Health Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                            {this.protectedNavViews()}
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


export default SiteBar;


