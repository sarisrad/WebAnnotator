import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'


export default class App extends Component {

    render() {
        var styles = {
            wrapper: {
                display: "flex",
            },
            footer: {
                flex: 1
            },
            header: {
                flex: 1
            },
            body: {
                style: {
                    "align-content": "space-around",
                    "flex-direction": "row",
                    "display": "flex",
                    "margin": 50
                },
                left: {
                    flex: 2
                },
                right: {
                    flex: 2
                },
                children: {
                    "align": "center",
                    width: "1000px",
                    flex: 4
                }
            }
        }

        return (
            <div>
                <div style={styles.header}>
                    <Header />
                </div>
                <div style={styles.body.style}>
                    <div style={styles.body.children}>
                        <div style={styles.body.right}></div>
                        {this.props.children}
                    </div>
                </div>
                <div style={styles.footer}>
                    <Footer />
                </div>
            </div>
        )
    }
}
