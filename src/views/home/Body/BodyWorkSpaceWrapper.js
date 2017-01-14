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
        this.state={
            is_working:false,
            current_children:[
                <StartWorking loadWorkSpace={this.loadWorkSpace.bind(this)}/>
            ]
        }
    }

    loadWorkSpace(work_info){
        this.setState({
            is_working: true,
            current_children:[
                <WorkSpace info={work_info} unloadWorkSpace={this.unloadWorkSpace.bind(this)}/>
            ] 
        });
    }

    unloadWorkSpace(){
        this.setState({
            is_working: false,
            current_children:[
                <StartWorking loadWorkSpace={this.loadWorkSpace.bind(this)}/>
            ] 
        });
    }

    render() {
        return (
            <div className="WorkSpaceWrapper">
                {this.state.current_children}
            </div>
        );

    }

}