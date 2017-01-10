import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'


export default class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="App_HeaderComponent">
                    <Header />
                </div>
                <div className="App_BodyComponent">
                    <div className="App_BodyChildrenComponent">
                            {this.props.children}
                    </div>
                </div>
                <div className="App_FooterComponent">
                    <Footer />
                </div>
            </div>
        )
    }
}
