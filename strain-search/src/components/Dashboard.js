import React, {Component} from 'react';

import {Col, Row, Container, Navbar, InputGroup, FormControl} from 'react-bootstrap';

import TinyDash from './SmallDash';

import Logo from "./images/weedBlackNew.jpg";

import './css/dashboard.css';

class dashboard extends Component{

    render(){

        return(

            <div className="dash">        
                
                        <Navbar fixed="top" bg="dark" variant="dark">
                            <Navbar.Brand href="/">
                                <img
                                    alt=""
                                    src={Logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{' '}
                                Strain Search
                            </Navbar.Brand>
                        </Navbar>
                        <div className="reSearchAgain"> 
                            <Row>

                                <Col lg="12" className="SearchAgain">
                                        
                                    Search Again...
                                        
                                </Col>

                            </Row>
                            <Row>

                                <Col lg="12" className="inputAgain">
                                    
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Strain Name..."
                                        aria-label="Strain Name"
                                        aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                </Col>

                            </Row>
                            <Row>

                                <Col sm="3" className="subHead">
                                
                                    Indica

                                </Col>

                                <Col sm="3" className="subHead">
                                
                                    Sativa

                                </Col>
                                <Col sm="3" className="subHead">
                                
                                    Hybrid

                                </Col>
                                <Col sm="2" className="subHead">
                                
                                    Feelings

                                </Col>
                                

                            </Row>

                        </div>

                            <Container>
                                    
                                <Row>

                                    <Col lg="12" className="paragraph">
                                    
                                        <TinyDash />
                                    
                                    </Col>

                                </Row>

                            </Container>
            
            </div>

        )

    }

}
export default dashboard;