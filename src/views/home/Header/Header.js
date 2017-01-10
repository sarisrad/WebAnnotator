import React, { Component } from 'react';
import '../../../App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';


export default class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="Header">
                <div className="Header_NavBarComponent">
                    <NavBar />
                </div>
                <div className="Header_LoginComponent">
                    <Login />
                </div>
            </div>
        )
    }

}