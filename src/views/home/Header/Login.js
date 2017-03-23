import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Navbar } from 'react-bootstrap'
import { browserHistory } from 'react-router';

export default class Login extends Component {

    componentWillMount() {
        this.setState({ server_address: this.props.getServerAddress() });
        this.props.connectUser("a"); //remove!!!!!
    }

    constructor() {
        super();
        this.state = {
            server_address: "",
            email: "",
            password: ""
        }
    }

    reqLoginUserListener(event, cur_obj) {
        var responsed_user_email = event.target.responseText;
        if (responsed_user_email === "None") {
            window.alert("Incorrect email or password, please try again.")
        }
        else {
            cur_obj.props.connectUser(responsed_user_email);
            browserHistory.push("/startworking");
        }
    }

    loginUser() {
        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var user_login_info_dict = {};
        user_login_info_dict["email"] = this.state.email;
        user_login_info_dict["password"] = this.state.password;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", (event) => { this.reqLoginUserListener(event, this) });
        oReq.open("POST", this.state.server_address + "login_user/");
        oReq.send(JSON.stringify(user_login_info_dict));

        return false;
    }

    handleChange(e) {
        switch (e.target.name) {
            case "email":
                this.setState({ email: e.target.value });
                break;
            case "password":
                this.setState({ password: e.target.value });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Navbar.Form>
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
                        value={this.state.password}
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange.bind(this)}
                        />
                    <Button onClick={this.loginUser.bind(this)}>Login</Button>
                </FormGroup>
            </Navbar.Form>
        );
    }
}