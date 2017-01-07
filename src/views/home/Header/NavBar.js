
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
                    <li><FlatButton ><Link to ="/">Home</Link></FlatButton></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/media">Media</Link></li>
                    <li><Link to ="/publications">Publications</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                    <li><Link to ="/signup">Sign Up</Link></li>
                    <li><Link to ="/livedemo">Live Demo</Link></li>
                </ul>
            </div>
        );

    }

}