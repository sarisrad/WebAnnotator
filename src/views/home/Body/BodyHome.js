import React, { Component } from 'react';
import '../../../App.css';
import SignUp from './SignUp.js'


export default class BodyHome extends Component {

    render() {
        return (
            <div className="BodyHome">
                <div className="BodyHome_Headers">
                    <h1>WebGT</h1>
                    <h2>Web Based Ground Truthing System</h2>
                </div>
                <div className="BodyHome_SignUpComponent">
                    <SignUp />
                </div>
            </div>
        )
    }
}

