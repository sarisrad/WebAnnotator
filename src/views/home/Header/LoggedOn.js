import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../../App.css';
import IconButton from 'material-ui/IconButton';


export default class LoggedOn extends Component {
     


    render() {
        return (
            <div className="LoggedOn">
                <ul style={{flex: 1, "flex-flow": "row wrap", "list-style": "none", "flex-direction": "row", display: "flex"}}>
                    <li>Logged</li>
                 </ul>   
            </div>
        )
    }
}
