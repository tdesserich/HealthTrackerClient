import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';  
  

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            usernameValid: true,
            passwordValid: true
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },
            () => {
                this.validateField(name, value)
            });
    }

    validateField(fieldName, value) {

        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'password':
                passwordValid = value.length >= 6;
                break;
            default:
                break;
        }

        this.setState({
            usernameValid: usernameValid,
            passwordValid: passwordValid
        });
    }

    handleSubmit = (event) => {
        if (this.state.usernameValid && this.state.passwordValid) {
            fetch("https://tdesserich-healthtrackerserver.herokuapp.com/user/signin", {
                method: 'POST',
                body: JSON.stringify({ user: this.state }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                this.props.setToken(data.sessionToken)
            })
        }
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="email" name="username" value={this.state.username} invalid={!this.state.usernameValid} placeholder="Username" onChange={this.handleChange} required />
                        <FormFeedback>Enter a valid email address</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" value={this.state.password} invalid={!this.state.passwordValid} placeholder="Password" onChange={this.handleChange} required />
                        <FormFeedback>Password must be 6 or more characters</FormFeedback>
                    </FormGroup>
                    <Button type="submit" color="secondary" style={{height: "40px", width: "80px"}}> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;