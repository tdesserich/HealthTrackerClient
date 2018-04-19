import React, { Component } from "react";
import validator from 'react-validation';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormFeedback
}
    from 'reactstrap';


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
            fetch("http://localhost:3000/user/signin", {
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
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="login_username" type="email" name="username" value={this.state.username} invalid={!this.state.usernameValid} placeholder="enter username" onChange={this.handleChange} />
                        <FormFeedback>Enter a valid email</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="login_password" type="text" name="password" value={this.state.password} invalid={!this.state.passwordValid} placeholder="enter password" onChange={this.handleChange} />
                        <FormFeedback>Enter a password 6 characters or more</FormFeedback>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Login;