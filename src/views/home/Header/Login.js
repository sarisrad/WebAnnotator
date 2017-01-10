import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../../App.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            server_address:"http://127.0.0.1:8000/login_user/",
            logged_in: false,
            user_email: ""
        }
    }


    // !!!WARNING!!!  Needs to be corrected Because this function is not in "this" scope
    reqListener () {
        console.log(this.responseText);
        if(this.responseText !== "None"){
            this.state.user_email = this.responseText;
            this.state.logged_in = true;
        }
        console.log(this.state.user_email);
    }

    loginUser(){
        //Getting the values of the inputs from the boxes and insert it into 
        var email_obj = document.getElementById("login_email_box");
        var password_obj = document.getElementById("login_password_box");
        
        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var user_login_info_dict = {};
        user_login_info_dict["email"] = email_obj.value;
        user_login_info_dict["password"] = password_obj.value;

        window.alert(JSON.stringify(user_login_info_dict))

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqListener);
        oReq.open("POST", this.state.server_address);
        oReq.send(JSON.stringify(user_login_info_dict));

        return false;        

    }

    render() {
        return (
            <div className="Login">
                 <TextField id="login_email_box" hintText="Email" />
                 <TextField id="login_password_box" hintText="Password" />
                 <FlatButton onClick={() => this.loginUser()}>Login</FlatButton>
            </div>
        )
    }
}
