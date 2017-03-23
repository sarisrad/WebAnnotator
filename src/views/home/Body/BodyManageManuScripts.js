import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap'

export default class BodyStartWorking extends Component {

    constructor() {
        super();
        this.state = {
            server_address: "http://127.0.0.1:8000/",
            work_page: {}
        }
    }

    //Adding new Collection/MS/Page to the DB
    reqAddCollectionListener() {
        console.log(this.responseText);
    }

    addCollection() {
        var coll_name = document.getElementById("collection_name_box");
        var coll_info_dict = {};

        console.log(coll_name.value);

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
        console.log(ms_name.value); // remove
        console.log(ms_lang.value); // remove
        console.log(ms_coll.value); // remove
        ms_info_dict["name"] = ms_name.value;
        ms_info_dict["language"] = ms_lang.value;
        ms_info_dict["collection"] = ms_coll.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddManuscriptListener);
        oReq.open("POST", this.state.server_address.concat("add_manuscript/"));
        oReq.send(JSON.stringify(ms_info_dict));

        return false;
    }

    reqAddPageListener() {
        console.log(this.responseText);
    }

    addPage() {
        var p_title = document.getElementById("p_title_box");
        var p_coll = document.getElementById("auto_comp_coll_add_page")
        var p_ms = document.getElementById("auto_comp_ms_add_page")
        var p_url = document.getElementById("p_url_box")
        var p_info_dict = {};
        console.log(p_title.value); // remove
        console.log(p_coll.value); // remove
        console.log(p_ms.value); // remove
        console.log(p_url.value); // remove
        p_info_dict["title"] = p_title.value;
        p_info_dict["collection"] = p_coll.value;
        p_info_dict["manuscript"] = p_ms.value;
        p_info_dict["image_src"] = p_url.value;

        //Sending the registered user info to the server
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", this.reqAddPageListener);
        oReq.open("POST", this.state.server_address.concat("add_page/"));
        oReq.send(JSON.stringify(p_info_dict));

        return false;
    }

    reqSearchPageListener(req, calling_obj) {
        console.log(req.target.responseText);
        var response_json = JSON.parse(req.target.responseText);
        if (response_json["status"] !== "FAIL") {
            calling_obj.props.loadWorkSpace(response_json["value"]);
        }
        else {
            window.alert("ERROR: ".concat(response_json["value"]));
        }
    }

    searchPage() {
        //------------------Opens the annotation edit page in a new window--------------------//  
        window.open(this.state.server_address.concat("get_annotation_html/?collection=" + this.state.work_page["collection"] +
            "&manuscript=" + this.state.work_page["manuscript"] +
            "&page=" + this.state.work_page["page"] +
            "&user=" + this.props.getConnectedUser()));
    }

    render() {
        return (
            <Grid>
                <h1>Manage Manuscripts</h1>
                <br /><br />
                <Row>
                    <h3>Add Collection</h3>
                    <Col md={5}>
                        <FormGroup>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="collection_name_box"
                                        type="text"
                                        placeholder="Collection"
                                        name="collection"
                                        />
                                </Col>
                                <Col>
                                    <Button onClick={this.addCollection.bind(this)}>Add</Button>
                                </Col>
                            </Row>
                            <Row>
                                <h3>Add Manuscript</h3>
                                <Col md={8}>
                                    <FormControl
                                        id="auto_comp_coll_add_ms"
                                        type="text"
                                        placeholder="Collection"
                                        name="collection"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="ms_name_box"
                                        type="text"
                                        value={this.state.work_page["manuscript"]}
                                        placeholder="Manuscript"
                                        name="manuscript"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="auto_comp_lang_add_ms"
                                        type="text"
                                        value={this.state.work_page["collection"]}
                                        placeholder="Language"
                                        name="language"
                                        />
                                </Col>
                                <Col>
                                    <Button onClick={this.addManuscript.bind(this)}>Add</Button>
                                </Col>
                            </Row>
                            <Row>
                                <h3>Add Page</h3>
                                <Col md={8}>
                                    <FormControl
                                        id="auto_comp_coll_add_page"
                                        type="text"
                                        value={this.state.work_page["collection"]}
                                        placeholder="Collection"
                                        name="collection"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="auto_comp_ms_add_page"
                                        type="text"
                                        value={this.state.work_page["manuscript"]}
                                        placeholder="Manuscript"
                                        name="manuscript"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="p_title_box"
                                        type="text"
                                        value={this.state.work_page["page"]}
                                        placeholder="Page"
                                        name="page"
                                        />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={8}>
                                    <FormControl
                                        id="p_url_box"
                                        type="text"
                                        value={this.state.work_page["image_src"]}
                                        placeholder="Image Source"
                                        name="image_src"
                                        />
                                </Col>
                                <Col>
                                    <Button onClick={this.addPage.bind(this)}>Add</Button>
                                </Col>
                            </Row>
                            <FormControl.Feedback />
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}