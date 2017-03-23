import React, { Component } from 'react';
import MyNavBar from './NavBar.js';
import Login from './Login.js';
import LoggedOn from './LoggedOn.js';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        let loginState = this.props.isConnected() ? <LoggedOn {...this.props} /> : <Login {...this.props} />;
        return (
            <Navbar fixedTop={true}>
                <Nav pullLeft>
                    <MyNavBar {...this.props} />
                </Nav>
                <Nav pullRight>
                    {loginState}
                </Nav>
            </Navbar>
        )
    }

}