import React, { Component } from 'react';
import SignUp from './SignUp.js'
import { Grid, Row, Col } from 'react-bootstrap'



export default class BodyHome extends Component {

    render() {
        return (

            <Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Col md={8}>
                    <h1>WebGT</h1>
                    <h3>Web Based Ground Truthing System</h3>
                </Col>
                <Col md={4}>

                    <SignUp />
                </Col>
            </Row>
        )
    }
}