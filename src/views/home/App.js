import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'


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

    getServerAddress(){
        return this.state.server_address;
    }

    render() {
        return (
            <div className="App">
                <div className="App_HeaderComponent">
                    <Header getServerAddress={this.getServerAddress.bind(this)} connectUser={this.connectUser.bind(this)} disconnectUser={this.disconnectUser.bind(this)} isConnected={this.isConnected.bind(this)} />
                </div>
                <div className="App_BodyComponent">
                    <div className="App_BodyChildrenComponent">
                        {React.cloneElement(this.props.children, {
                            connectUser: this.connectUser.bind(this),
                            disconnectUser: this.connectUser.bind(this),
                            isConnected: this.isConnected.bind(this),
                            getConnectedUser: this.getConnectedUser.bind(this)
                        })}
                    </div>
                </div>
                <div className="App_FooterComponent">
                    <Footer />
                </div>
            </div>
        )
    }
}
