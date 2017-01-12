import React, { Component } from 'react';
import '../../../App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';
import LoggedOn from './LoggedOn.js';


export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            isLogged: false
        }
        this.handler = this.handler.bind(this)
    }

    handler() {
        this.setState({
            isLogged: true
        })
    }


    render() {
        let loginState = this.state.isLogged ? <LoggedOn/> : <Login handler={this.handler}/>;
        return (
            <div className="Header">
                <div className="Header_NavBarComponent">
                    <NavBar />
                </div>
                <div className="Header_LoginComponent">
                    {loginState}
                </div>
            </div>
        )
    }

}