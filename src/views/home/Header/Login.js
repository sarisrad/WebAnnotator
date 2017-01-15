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
        }
    }

    reqLoginUserListener (event,cur_obj) {
        var responsed_user_email = event.target.responseText;
         if(responsed_user_email == "None"){
            window.alert("Incorrect email or password, please try again.")
        } 
        else{
            cur_obj.props.connectUser(responsed_user_email);
        }
    }

    loginUser(){
        //Getting the values of the inputs from the boxes and insert it into 
        var email_obj = document.getElementById("login_email_box");
        var password_obj = document.getElementById("login_password_box");
        
        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var user_login_info_dict = {};
        user_login_info_dict["email"] = email_obj.value;
        user_login_info_dict["password"] = password_obj.value;

        

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", (event)=>{this.reqLoginUserListener(event,this)});
        oReq.open("POST", this.state.server_address);
        oReq.send(JSON.stringify(user_login_info_dict));

        return false;        

    }

    render() {
        return (
            <div className="Login">
                <ul style={{flex: 1, "flex-flow": "row wrap", "list-style": "none", "flex-direction": "row", display: "flex"}}>
                    <li><TextField id="login_email_box" hintText="Email" /></li>
                    <li><TextField id="login_password_box" hintText="Password" /></li>
                    <li><FlatButton onClick={this.loginUser.bind(this)}><Link to ="/startworking">Login</Link></FlatButton></li>
                 </ul>   
                 
            </div>
        )
    }
}
