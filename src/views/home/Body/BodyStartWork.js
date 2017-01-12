import React, { Component } from 'react';
import { Link } from 'react-router';         
import '../../../App.css';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';


export default class BodyStartWork extends Component {

    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/"
        }

    }

    //Used for Auto-complete lists 
    getCollectionsNames() {
        var coll_names = [
            "Coll1", "Coll2", "Coll3"
        ];
        return coll_names;
    }

    getRelevantMSs() {
        var relevant_mss = [
            "MS1", "MS2", "MS3"
        ];
        return relevant_mss;
    }

    getAvailableLanguages() {
        var available_languages = [
            "Hebrew", "Arabic", "Aramaic"
        ];
        return available_languages;
    }



    //Adding new Collection/MS/Page to the DB
    reqAddCollectionListener() {
        console.log(this.responseText);
    }

    addCollection() {
        var coll_name = document.getElementById("collection_name_box");
        var coll_info_dict = {};
        coll_info_dict["name"] = coll_name.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddCollectionListener);
        oReq.open("POST", this.state.server_address.concat("add_collection/"));
        oReq.send(JSON.stringify(coll_info_dict));

        return false;
    }

    reqAddManuscriptListener() {
        console.log(this.responseText);
    }

    addManuscript() {
        var ms_name = document.getElementById("ms_name_box");
        var ms_lang = document.getElementById("auto_comp_lang_add_ms")
        var ms_coll = document.getElementById("auto_comp_coll_add_ms")
        var ms_info_dict = {};
        ms_info_dict["name"] = ms_name.value;
        ms_info_dict["language"] = ms_lang.value;
        ms_info_dict["collection"] = ms_coll.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddCollectionListener);
        oReq.open("POST", this.state.server_address.concat("add_manuscript/"));
        oReq.send(JSON.stringify(ms_info_dict));

        return false;
    }

    addPage() {
        var p_title = document.getElementById("p_title_box");
        var p_coll = document.getElementById("auto_comp_coll_add_page")
        var p_ms = document.getElementById("auto_comp_ms_add_page")
        var p_info_dict = {};
        p_info_dict["title"] = p_title.value;
        p_info_dict["collection"] = p_coll.value;
        p_info_dict["manuscript"] = p_ms.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddCollectionListener);
        oReq.open("POST", this.state.server_address.concat("add_page/"));
        oReq.send(JSON.stringify(p_info_dict));

        return false;
    }


    render() {
        return (
            <div className="StartWork">
                <h1>Start Work! :)</h1>
                <br /><br />
                <div className="AddCollection">
                    <h2>Add Collection: </h2>
                    <TextField id="collection_name_box" hintText="Collection name" />
                    <FlatButton onClick={() => this.addCollection()}>Add</FlatButton>
                </div>
                <br /><br />
                <div className="Add Manuscript">
                    <h2>Add Manuscript: </h2>
                    <AutoComplete id="auto_comp_coll_add_ms" dataSource={this.getCollectionsNames()} openOnFocus={true} hintText="Choose Collection" />
                    <AutoComplete id="auto_comp_lang_add_ms" dataSource={this.getAvailableLanguages()} openOnFocus={true} hintText="Choose Language" />
                    <TextField id="ms_name_box" hintText="Manuscript name" />
                    <FlatButton onClick={() => this.addManuscript()}>Add</FlatButton>
                </div>
                <br /><br />
                <div className="Add Page">
                    <h2>Add Manuscript: </h2>
                    <AutoComplete id="auto_comp_coll_add_page" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} dataSource={this.getCollectionsNames()} openOnFocus={true} hintText="Choose Collection" />
                    <AutoComplete id="auto_comp_ms_add_page" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} dataSource={this.getRelevantMSs()} openOnFocus={true} hintText="Choose Manuscript" />
                    <TextField id="p_title_box" hintText="Page Title" />
                    <FlatButton onClick={() => this.addPage()}>Add</FlatButton>
                </div>
                <br /><br />
                <FlatButton><Link to ="/workspace">Start Working</Link></FlatButton>
            </div>
        )
    }
}