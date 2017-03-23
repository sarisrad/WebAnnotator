import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class NavBar extends Component {

    componentWillMount() {
        this.setState({
            navBarState: {
                loggedNavBar: (
                    <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} navbar={true}>
                        <NavItem eventKey={1}>Home</NavItem>
                        <NavItem eventKey={2}>Start Working</NavItem>
                        <NavItem eventKey={3}>Manage Manuscripts</NavItem>
                    </Nav>
                ),
                notLoggedNavBar: (
                    <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} navbar={true}>
                        <NavItem eventKey={1}>Home</NavItem>
                    </Nav>
                )
            }
        });
    }

    constructor() {
        super();
        this.state = {
            activeKey: 2,
            navBarState: {}

        }
    }



    handleSelect(selectedKey) {
        switch (selectedKey) {
            case 1:
                browserHistory.push('/');
                break;
            case 2:
                browserHistory.push('/startworking');
                break;
            case 3:
                browserHistory.push('/managemanuscripts');
                break;
            default:
                break;
        }
        this.setState({ activeKey: selectedKey });
    }

    render() {
        return (
            this.props.isConnected() ? this.state.navBarState.loggedNavBar : this.state.navBarState.notLoggedNavBar
        );
    }
}