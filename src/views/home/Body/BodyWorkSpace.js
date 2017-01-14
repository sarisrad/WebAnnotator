import React, { Component } from 'react';
import '../../../App.css';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import WorkZone from './WorkSpace/WorkZone';

export default class BodyWorkSpace extends Component {

    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/",
            // current_children:[
            //     <WorkZone info={this.props.info}/>
            // ]
        }

    }

    unloadWorkSpace(){
        this.props.unloadWorkSpace();
    }

    render() {
        return (
            <div className="StartWork">
                WorkSpace
                <br/><br/><br/>
                <button onClick={this.unloadWorkSpace.bind(this)}> Stop Work </button>  
                <WorkZone info="AAA"/>   
            </div>
        )
    }
}