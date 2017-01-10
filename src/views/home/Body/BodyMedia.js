import React, { Component } from 'react';

export default class BodyMedia extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Media</h1>
                <ul>
                    <li><h2>Web articles</h2></li>
                        <ul>
                            <li><h3>Reuters - Computer algorithm to decipher ancient texts</h3></li>
                            <li><h3>ieeexplore - Researchers Develop Application to Identify Ancient Document</h3></li>
                        </ul>    
                    <li><h2>National Geographic</h2></li>
                </ul>    
            </div>
        )
    }
}

