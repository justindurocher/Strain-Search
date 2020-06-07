import React, {Component} from 'react';

import {Col, Row, Container, Navbar, Form, ListGroup} from 'react-bootstrap';

import Logo from "./images/weedBlackNew.jpg";

import Plant1 from "./images/plant-1New.jpg";

import Plant2 from "./images/weedplantNew.jpg";

import Plant3 from "./images/plant-3New.jpg";

import './css/dashboard.css';

class dashboard extends Component{

    render(){

        return(

            <div className="dash">
            
         

                            <Navbar bg="black" variant="dark" >
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

                            <Row className="imagesRow">

                                <Col>
                                
                                    <img alt="plant" src={Plant1} height="200px" width="400px" className="plantImg"/>
                                
                                </Col>

                                <Col>
                                
                                    <img alt="plant" src={Plant2} height="200px" width="400px" className="plantImg"/>  
                                
                                </Col>

                                <Col>
                                
                                    <img alt="plant" src={Plant3} height="200px" width="400px" className="plantImg"/>
                                
                                </Col>

                            </Row>

                            <Container>

                                <Row>

                                    <Col lg="2" className="sideOverlay">
                                    
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label className="form-label">Search Again</Form.Label>
                                                <Form.Control type="email" placeholder="Strain Name" />
                                        </Form.Group>
                                        </Form>

                                        <Row>

                                            <ListGroup>
                                                <ListGroup.Item>Indica</ListGroup.Item>
                                                <ListGroup.Item>Sativa</ListGroup.Item>
                                                <ListGroup.Item>Hybrids</ListGroup.Item>
                                                <ListGroup.Item>All Strains</ListGroup.Item>
                                                <ListGroup.Item>Dispensaries</ListGroup.Item>
                                                <ListGroup.Item>Past Searches</ListGroup.Item>
                                                <ListGroup.Item>________________________</ListGroup.Item>
                                            </ListGroup>

                                        </Row>
                                    
                                    </Col>

                                    <Col lg="10" className="paragraph">
                                    
                                        Weed Strain
                                    
                                    </Col>

                                </Row>

                            </Container>

            
            </div>

        )

    }

}
export default dashboard;