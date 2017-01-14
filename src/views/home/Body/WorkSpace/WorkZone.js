import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import View from 'react'

export default class WorkZone extends Component {
    componentDidMount() {

    }

    //*state*: annotation_body is the actual annotation outer library script 
    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/",
            annotation_body: [
            ]
        }
    }

    loadAnnotations(){
        window.open(this.state.server_address.concat("get_annotation_html/"));
    }

    render() {
        return (
            <div>
                <div className="StartWork" onLoad={this.loadAnnotations}>
                    WorkZone
                    <br/><br/><br/>
                    <button onClick={this.loadAnnotations.bind(this)}> Load Annotations! </button>
                    {this.state.annotation_body}             
                </div>
            </div>
        )
    }
}