import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import { Row, Grid, Col } from 'react-bootstrap';

export default class App extends Component {

    //Notes: 1. If the current_user is "" then nobody is connected
    constructor() {
        super();
        this.state = {
            current_user_email: "",
            server_address: "http://127.0.0.1:8000/"
        }
    }

    connectUser(user_email) {
        this.setState({
            current_user_email: user_email,
        }
        );
    }

    disconnectUser() {
        this.setState({
            current_user_email: "",
        });
    }

    isConnected() {
        return (!(this.state.current_user_email == ""));
    }

    getConnectedUser() {
        return this.state.current_user_email;
    }

    getServerAddress() {
        return this.state.server_address;
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <Header getServerAddress={this.getServerAddress.bind(this)} connectUser={this.connectUser.bind(this)} disconnectUser={this.disconnectUser.bind(this)} isConnected={this.isConnected.bind(this)} />
                    </Col>
                </Row>
                <br/><br/>
                <Row className="show-grid">
                    {React.cloneElement(this.props.children, {
                        connectUser: this.connectUser.bind(this),
                        disconnectUser: this.connectUser.bind(this),
                        isConnected: this.isConnected.bind(this),
                        getConnectedUser: this.getConnectedUser.bind(this)
                    })}
                </Row>
                <div className="App_FooterComponent">
                    <Footer />
                </div>
            </Grid>
        )
    }
}
