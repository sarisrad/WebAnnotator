import React, { Component } from 'react';
import '../../../App.css';
import SignUp from './SignUp.js'


export default class BodyHome extends Component {

    render() {
        var styles = {
            wrapper: {
                "display": "flex",
                "flex-direction": "row"
            },
            h1: {
                "fontSize": 100,
                "text-align": "center"
            },
            h2: {
                "fontSize": 80,
                "width": 1000,
                "text-align": "center"
            },
            signup: {
                "margin-top": 100,
                "margin-left": 50
            }
        }
        return (
            <div style={styles.wrapper}>
                <div>
                    <h1 style={styles.h1}>WebGT</h1>
                    <h2 style={styles.h2}>Web Based Ground Truthing System</h2>
                </div>
                <div style={styles.signup}>
                    <SignUp/>
                </div>
            </div>
        )
    }
}

