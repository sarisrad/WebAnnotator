import React, { Component } from 'react';
import { Link } from 'react-router';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Form, Button, Navbar } from 'react-bootstrap'
import {browserHistory} from 'react-router';


export default class LoggedOn extends Component {

    logOut() {
        this.props.disconnectUser();
        browserHistory.push('/');
    }

    render() {
        return (
            <Navbar.Text inline>
                <Button bsSize="small" onClick={this.logOut.bind(this)}> Log-out </Button>
            </Navbar.Text>
        );
    }
}
