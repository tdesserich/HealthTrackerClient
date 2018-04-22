import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import OpeningCarousel from '../site/Carousel'



const Auth = (props) => {
    return (
        <div>
            <OpeningCarousel />
                <br />
                <br/>
            <Container>
                <Row>  
                    <Col lg={{ size: '6', offset: 3 }}>
                        <Login setToken={props.setToken} />
                    </Col>
                </Row>
                <br />
                <br/>
                <Row>
                    <Col lg={{ size: '6', offset: 3 }}>
                        <Signup setToken={props.setToken} />
                    </Col>
                </Row>  
            </Container>
            <br/>
            <br/>
        </div>
    )
}
export default Auth;