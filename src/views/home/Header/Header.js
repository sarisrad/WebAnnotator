import React, { Component } from 'react';
import '../../../App.css';
import NavBar from './NavBar.js';
import Login from './Login.js';
import LoggedOn from './LoggedOn.js';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        let loginState = this.props.isConnected() ? <LoggedOn {...this.props}/> : <Login {...this.props}/>;
        return (
            <Toolbar>
                <ToolbarGroup firstChild="true">
                    <NavBar {...this.props}/>
                </ToolbarGroup>
                <ToolbarGroup lastChild="true">
                    {loginState}
                </ToolbarGroup>                
            </Toolbar>
            // <div className="Header">
            //     <div className="Header_NavBarComponent">
            //     </div>
            //     <div className="Header_LoginComponent">
            //     </div>
            // </div>
        )
    }

}