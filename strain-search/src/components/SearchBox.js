import React, {Component} from 'react';

import {Container, Col, Row , InputGroup, FormControl , Button} from "react-bootstrap";

import Logo from './images/weedBlackNew.jpg';

import './css/searchBox.css';

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

                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Strain Name..."
                                    aria-label="Strain Name"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                    <Button variant="outline-success" href="/dash">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>

                            </Col>

                        </Row>

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

                    <Row>

                        <Col lg="12" className="mini-quote">
                        
                            Find any strain available in the United States market today

                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12" className="sub-title">
                        
                            Or Check out the lists...

                        </Col>

                    </Row>
                    <Row>

                        <Col sm="6">
                        
                            <Button variant="warning" href="/dash">Sativa</Button>

                        </Col>

                        <Col sm="6">
                        
                            <Button variant="info" href="/dash">Indica</Button>
                        
                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}

export default search;