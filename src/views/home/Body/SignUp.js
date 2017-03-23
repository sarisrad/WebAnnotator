import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form, Button, Navbar, Grid, Row, Col, Text } from 'react-bootstrap'

export default class SignUp extends Component {


    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/register_user/",
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            password_confirm: "",
            affiliation: ""
        }
    }

    reqListener() {
        console.log(this.responseText);
    }

    registerUser() {
        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var user_reg_info_dict = {};
        user_reg_info_dict["first_name"] = this.state.first_name;
        user_reg_info_dict["last_name"] = this.state.last_name;
        user_reg_info_dict["email"] = this.state.email;
        user_reg_info_dict["password"] = this.state.password;
        user_reg_info_dict["affiliation"] = this.state.affiliation;

        window.alert(JSON.stringify(user_reg_info_dict));

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqListener);
        oReq.open("POST", this.state.server_address);
        oReq.send(JSON.stringify(user_reg_info_dict));

        return false;

    }

    handleChange(e) {
        switch (e.target.name) {
            case "email":
                this.setState({ email: e.target.value });
                break;
            case "first_name":
                this.setState({ first_name: e.target.value });
                break;
            case "last_name":
                this.setState({ last_name: e.target.value });
                break;
            case "password":
                this.setState({ password: e.target.value });
                break;
            case "password_confirm":
                this.setState({ password_confirm: e.target.value });
                break;
            case "affiliation":
                this.setState({ affiliation: e.target.value });
                break;
        }
    }

    render() {
        return (
            <Form horizontal>
                <h3> New User Registration </h3>
                <br />
                <FormGroup controlId="formBasicText">
                    <FormControl
                        type="text"
                        value={this.state.email}
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl
                        type="text"
                        value={this.state.first_name}
                        placeholder="First Name"
                        name="first_name"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl
                        type="text"
                        value={this.state.last_name}
                        placeholder="Last Name"
                        name="last_name"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl
                        type="text"
                        value={this.state.password}
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl
                        type="text"
                        value={this.state.password_confirm}
                        placeholder="Password Confirmation"
                        name="password_confirm"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl
                        type="text"
                        value={this.state.affiliation}
                        placeholder="Affiliation"
                        name="affiliation"
                        onChange={this.handleChange.bind(this)}
                        />
                    <FormControl.Feedback />
                    {' '}
                    <Col mdOffset={5}>
                        <Button onClick={this.registerUser.bind(this)}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}