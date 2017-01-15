import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import StartWorking from './BodyStartWorking';
import WorkSpace from './BodyWorkSpace';


export default class NavBar extends Component {

    //*state*: is_working tells the wrapper when to switch to the workspace
    constructor() {
        super();
    }

    render() {
        return (
            <div className="WorkSpaceWrapper">
                <StartWorking {...this.props}/>
            </div>
        );

    }

}