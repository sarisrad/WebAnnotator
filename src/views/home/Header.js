import React, { Component } from 'react';
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
            <div className="HeaderWrapper">
                <NavBar />
                <Login />
            </div>
        )
    }    

}