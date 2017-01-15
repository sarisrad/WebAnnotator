import React, { Component } from 'react';
import '../../../App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';
import LoggedOn from './LoggedOn.js';


export default class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        let loginState = this.props.isConnected() ? <LoggedOn {...this.props}/> : <Login {...this.props}/>;
        return (
            <div className="Header">
                <div className="Header_NavBarComponent">
                    <NavBar {...this.props}/>
                </div>
                <div className="Header_LoginComponent">
                    {loginState}
                </div>
            </div>
        )
    }

}