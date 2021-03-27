import React, {Component} from 'react';

import Logo from './images/weedBlackNew.jpg';

import './css/welcome.css';

class welcome extends Component{

    render(){

        return(

            <div className='welcomePage'>

                <Container>

                    <Row>

                        <Col lg='12' className="logo">

                            <img alt="logo" src={Logo}/>

                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12" className="name">
                        
                            Strain Search

                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12" className="slogan">
                        
                            Where you can find information on all your favorite Marijuana Strains...

                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12" className="startSearch">
                        
                            <Button variant="flat" size="lg" href="/search" block>

                                Start Search

                            </Button>

                        </Col>

                    </Row>

                </Container>

            </div>

        )

    }

}

export default welcome;