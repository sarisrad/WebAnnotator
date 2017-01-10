import React, { Component } from 'react';
import '../../../App.css';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
        }
        var server_address = "http://127.0.0.1:8000/register_user/";
    }

    reqListener () {
        console.log(this.responseText);
    }

    registerUser(){
        //Getting the values of the inputs from the boxes and insert it into 
        var first_name_obj = document.getElementById("first_name_box");
        var last_name_obj = document.getElementById("last_name_box");
        var email_obj = document.getElementById("email_box");
        var password_obj = document.getElementById("password_box");
        var password_confirm_obj = document.getElementById("password_confirm_box");
        var affiliation_obj = document.getElementById("affiliation_box");
        
        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var user_reg_info_dict = {};
        user_reg_info_dict["first_name"] = first_name_obj.value;
        user_reg_info_dict["last_name"] = last_name_obj.value;
        user_reg_info_dict["email"] = email_obj.value;
        user_reg_info_dict["password"] = password_obj.value;
        user_reg_info_dict["affiliation"] = affiliation_obj.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqListener);
        oReq.open("POST", this.server_address);
        oReq.send(JSON.stringify(user_reg_info_dict));

        return false;        

    }

    render() {
        return (
            <div className="SignUp">
                <h1>Sign Up</h1>
                <h2>It's free and anyone can join us</h2>
                 <TextField id="first_name_box" hintText="User Name" onChange={(event) => {console.log(event.target.value)}}/>
                 <TextField id="last_name_box" hintText="Last Name" />
                 <TextField id="email_box" hintText="Email" />
                 <TextField id="password_box" hintText="Password" />
                 <TextField id="password_confirm_box" hintText="Password Confirmation" />
                 <TextField id="affiliation_box" hintText="Affiliation" />
                 <br></br>
                <FlatButton onClick={() => this.registerUser()}>Register</FlatButton>
            </div>
        )
    }
}