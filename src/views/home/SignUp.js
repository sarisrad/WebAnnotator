
import React, { Component } from 'react';


export default class SignUP extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            < div className="SignUpWrapper" >
                <div className="SignUpHeader">
                    <h3>Sign Up</h3>
                    <h4>It's free and anyone can join us</h4>
                </div>
                <div className="SignUpTable">
                    <table>
                        <tr><td> <b>Email:</b></td>
                            <td><input name="rgEmail" type="text" id="rgEmail" tabindex="4" /></td></tr>

                        <tr><td> <b>First Name:</b></td>
                            <td><input name="rgFname" type="text" id="rgFname" tabindex="5" /></td></tr>

                        <tr><td> <b>Last Name:</b></td>
                            <td><input name="rgLname" type="text" id="rgLname" tabindex="6" /></td></tr>

                        <tr><td> <b> Password:</b></td>
                            <td> <input name="rgPassword" type="password" id="rgPassword" tabindex="7" /> </td></tr>

                        <tr><td> <b> Confirm password:</b></td>
                            <td> <input name="rgPasswordConfirm" type="password" id="rgPasswordConfirm" tabindex="7" /> </td></tr>

                        <tr><td><b> Affiliation: </b></td>
                            <td><input name="rgAff" type="text" id="rgAff" tabindex="8" /></td></tr>
                        <tr><td colspan="2">
                            <div id="SignUpRegisterButton">
                                <a className="btn-register" href="javascript:__doPostBack(&#39;rgstrButton&#39;,&#39;&#39;)">Register</a>
                            </div>
                        </td></tr>
                    </table>
                </div>
            </div>
        )
    }

}