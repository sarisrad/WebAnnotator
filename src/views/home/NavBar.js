
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="NavBarWrapper">
                <ul>
                    <li><Link to ="/">Home</Link></li>
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