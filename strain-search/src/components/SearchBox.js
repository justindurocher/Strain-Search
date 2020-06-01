import React, {Component} from 'react';

import {Container, Col, Row , Form , Button} from "react-bootstrap";

import Logo from './images/weedBlackNew.jpg';

import './css/searchBox.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class search extends Component{

    render(){

        return(

            <div className="searchPage">

                <Container>

                    <Row>

                        <Col lg="12" className="title">
                        
                            Strain Search
                        
                        </Col>

                    </Row>

                    <Row className="logo-row-1">

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12" className="searchBox">
                        
                        <Form>
                            <Form.Group controlId="formBasic">
                            <Form.Control size="large" type="text" placeholder="Search Strain..." />
                            <Row className="logo-row-2">

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>

                        </Col>

                        <Col sm="1" className="mini-logo">
                        
                            <img alt="logo" src={Logo} height="75px" width="75px"/>
                        
                        </Col>

                    </Row>
                            <Form.Text className="text-muted">
                                Reliable and accurate information on every medical weed strain available in the United States
                            </Form.Text>
                        </Form.Group>
                        </Form>
                        </Col>

                    </Row>
                    
                    <Row>

                        <Col lg="12" className="sub-title">
                        
                            Or Check out the lists...

                        </Col>

                    </Row>
                    <Row>

                        <Col sm="6">
                        
                            <Button variant="warning">Sativa</Button>

                        </Col>

                        <Col sm="6">
                        
                            <Button variant="info">Indica</Button>
                        
                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}

export default search;