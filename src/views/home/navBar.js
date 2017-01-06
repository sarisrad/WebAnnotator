
import React, { Component } from 'react';

class NavBar extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="NavBarWrapper">
                <ul className="NavBar">
                    <li onClick={this.props.navigate('home')}>Home</li>
                    <li onClick={this.props.navigate('about')}>About</li>
                    <li onClick={this.props.navigate('media')}>Media</li>
                    <li onClick={this.props.navigate('publications')}>Publications</li>
                    <li onClick={this.props.navigate('contact')}>Contact</li>
                    <li onClick={this.props.navigate('signUp')}>Sign Up</li>
                    <li onClick={this.props.navigate('liveDemo')}>Live Demo</li>
                </ul>
            </div>
        );

    }

}