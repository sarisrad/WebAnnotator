
import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

export default class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="NavBarWrapper">
                <ul style={{flex: 1, "flex-flow": "row wrap", "list-style": "none", "flex-direction": "row", display: "flex"}}>
                    <li><FlatButton><Link to ="/">Home</Link></FlatButton></li>
                    <li><FlatButton><Link to ="/about">About</Link></FlatButton></li>
                    <li><FlatButton><Link to ="/media">Media</Link></FlatButton></li>
                    <li><FlatButton><Link to ="/publications">Publications</Link></FlatButton></li>
                    <li><FlatButton><Link to ="/contact">Contact</Link></FlatButton></li>
                    <li><FlatButton><Link to ="/livedemo">Live Demo</Link></FlatButton></li>
                </ul>
            </div>
        );

    }

}