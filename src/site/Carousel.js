import React, { Component } from 'react';
import { UncontrolledCarousel, Container, Col } from 'reactstrap';
import Two from '../assets/two.jpg'
import One from '../assets/one.jpg'
import Three from '../assets/three.jpg'


const items = [
    {
        src: One
    },
    {
        src: Two
    },
    {
        src: Three
    }
];

class OpeningCarousel extends Component {
    render() {
        return (
            <Container>
            <Col lg={{ size: '8', offset: 2 }}>
                <UncontrolledCarousel className="carousel" items={items}>
                </UncontrolledCarousel>
            </Col>
            </Container>
        )
    }
}

export default OpeningCarousel;

