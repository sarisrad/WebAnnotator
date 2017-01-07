import React, { Component } from 'react';
import '../../../App.css';
import TextField from 'material-ui/TextField';


export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
        }
    }



    render() {
        return (
            <div className="SignUpWrapper">
                <h1>Sign Up</h1>
                <h2>It's free and anyone can join us</h2>
                 <TextField hintText="User Name" onChange={(event) => {console.log(event.target.value)}}/>
                 <TextField hintText="Last Name" />
                 <TextField hintText="Hint Text" />
                 <TextField hintText="Hint Text" />}
                <form action="www.facebook.com" method="get" id="user_registration_form">
                    First Name: <input type="text" name="first_name" /><br></br>
                    Last Name: <input type="text" name="last_name" /><br></br>
                    Email: <input type="text" name="email" /><br></br>
                    Password: <input type="text" name="password" /><br></br>
                    Confirm Password: <input type="text" name="confirmation_password" /><br></br>
                    Affiliation: <input type="text" name="affiliation" /><br></br>
                </form>
                <button>Register</button>
            </div>
        )
    }
}

