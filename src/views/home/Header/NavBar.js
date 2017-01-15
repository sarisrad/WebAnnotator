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
                    <li><Link to ="/"><FlatButton>Home</FlatButton></Link></li>
                    <li><Link to ="/about"><FlatButton>About</FlatButton></Link></li>
                    <li><Link to ="/media"><FlatButton>Media</FlatButton></Link></li>
                    <li><Link to ="/publications"><FlatButton>Publications</FlatButton></Link></li>
                    <li><Link to ="/contact"><FlatButton>Contact</FlatButton></Link></li>
                    <li><Link to ="/livedemo"><FlatButton>Live Demo</FlatButton></Link></li>
                </ul>
            </div>
        );

    }

}