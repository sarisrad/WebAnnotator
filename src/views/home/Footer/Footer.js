
import React, { Component } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';


export default class Footer extends Component {

    render() {
        return (
            <Navbar fixedBottom={true}>
                <Row>
                    <Col mdOffset={0}>
                        <h6> &copy; Ben Gurion University of the Negev </h6>
                    </Col>
                </Row>
            </Navbar>
        );
    }

}