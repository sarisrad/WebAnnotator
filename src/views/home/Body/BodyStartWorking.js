import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../../App.css';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';



export default class BodyStartWorking extends Component {

    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/",
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

    getRelevantPGs() {
        var relevant_pgs = [
            "PG1", "PG2", "PG3"
        ];
        return relevant_pgs;
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
        var p_url = document.getElementById("p_url_box")
        var p_info_dict = {};
        p_info_dict["title"] = p_title.value;
        p_info_dict["collection"] = p_coll.value;
        p_info_dict["manuscript"] = p_ms.value;
        p_info_dict["image_src"] = p_url.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddCollectionListener);
        oReq.open("POST", this.state.server_address.concat("add_page/"));
        oReq.send(JSON.stringify(p_info_dict));

        return false;
    }

    searchPage() {

        this.props.handler();

        //Getting the values of the inputs from the boxes and insert it into 
        var coll_obj = document.getElementById("auto_comp_coll");
        var ms_obj = document.getElementById("auto_comp_ms");
        var pg_obj = document.getElementById("auto_comp_pg");

        //The actual insertion into the dictionary in order to send it as HTTPRequest (JSON format)
        var search_info_dict = {};
        search_info_dict["collection"] = coll_obj.value;
        search_info_dict["manuscript"] = ms_obj.value;
        search_info_dict["page"] = pg_obj.value;
        //Fix it!!!!!!
        search_info_dict["user"] = "a";



        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqListener);
        oReq.open("POST", this.state.server_address);
        oReq.send(JSON.stringify(search_info_dict));

        return false;

    }

    render() {
        return (
            <div className="StartWorking">
                <h1>Start Working</h1>
                <br /><br />
                <div className="StartWorking_Adding">
                    <h2> Adding Collection, Manuscript or Page</h2>

                    <div className="StartWorking_AddCollection">
                        <h4>Add Collection: </h4>
                        <TextField id="collection_name_box" hintText="Collection Name" />
                        <FlatButton onClick={() => this.addCollection()}>Add</FlatButton>
                    </div>
                    <br /><br />
                    <div className="StartWorking_AddManuscript">
                        <h4>Add Manuscript: </h4>
                        <AutoComplete id="auto_comp_coll_add_ms" dataSource={this.getCollectionsNames()} openOnFocus={true} hintText="Choose Collection" />
                        <AutoComplete id="auto_comp_lang_add_ms" dataSource={this.getAvailableLanguages()} openOnFocus={true} hintText="Choose Language" />
                        <TextField id="ms_name_box" hintText="Manuscript Name" />
                        <FlatButton onClick={() => this.addManuscript()}>Add</FlatButton>
                    </div>
                    <br /><br />
                    <div className="StartWorking_AddPage">
                        <h4>Add Manuscript: </h4>
                        <AutoComplete id="auto_comp_coll_add_page" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} dataSource={this.getCollectionsNames()} openOnFocus={true} hintText="Choose Collection" />
                        <AutoComplete id="auto_comp_ms_add_page" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} dataSource={this.getRelevantMSs()} openOnFocus={true} hintText="Choose Manuscript" />
                        <TextField id="p_title_box" hintText="Page Title" />
                        <TextField id="p_url_box" hintText="Image URL" />
                        <FlatButton onClick={() => this.addPage()}>Add</FlatButton>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                <div className="StartWorking_GoToWorkSpace" />
                <h2> Choose Page to work on</h2>
                <AutoComplete id="auto_comp_coll" dataSource={this.getCollectionsNames()} openOnFocus={true} hintText="Choose Collection" />
                <AutoComplete id="auto_comp_ms" dataSource={this.getRelevantMSs()} openOnFocus={true} hintText="Choose Manuscript" />
                <AutoComplete id="auto_comp_pg" dataSource={this.getRelevantPGs()} openOnFocus={true} hintText="Choose Page" />
                <FlatButton onClick={() => { this.searchPage() } }><Link to="/workspace">Start Working</Link></FlatButton>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}