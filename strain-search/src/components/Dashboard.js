import React, {Component} from 'react';

import {Col, Row, Container, Navbar, Form, ListGroup} from 'react-bootstrap';

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

                            <Row>
                                <Container>

                                        <Col lg="12" className="SearchAgain">
                                        
                                            Search Again...
                                        
                                        </Col>

                                </Container>
                            </Row>

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