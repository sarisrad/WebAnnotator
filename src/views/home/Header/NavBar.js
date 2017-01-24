import React, { Component } from 'react';
import { Link } from 'react-router';
import {Nav, NavItem} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class NavBar extends Component {

    constructor() {
        super();
    }

    handleSelect(selectedKey) {
        switch(selectedKey){
            case 1:
                browserHistory.push('/');
                break;
            case 2:
                browserHistory.push('/about');
                break;
            case 3:
                browserHistory.push('/media');
                break;
            case 4:
                browserHistory.push('/publications');
                break;                                                
            case 5:
                browserHistory.push('/contact');
                break;                
        }
    }

    render() {
        return (
            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect.bind(this)} navbar={true}>
                <NavItem eventKey={1}>Home</NavItem>
                <NavItem eventKey={2}>About</NavItem>
                <NavItem eventKey={3}>Media</NavItem>
                <NavItem eventKey={4}>Publications</NavItem>
                <NavItem eventKey={5}>Contact</NavItem>
            </Nav>
        );
    }
}