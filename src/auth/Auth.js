import React from 'react';
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import OpeningCarousel from '../site/Carousel'
import './auth.css'


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
        </div>
    )
}
export default Auth;