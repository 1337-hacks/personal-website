import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageOfMe from './images/me.jpg';

function AboutMe() {

    return (
        <div className='about-me'>
            <Container>
                <Row>
                    <Col>
                        <h1>Hi, I'm Elijah!</h1>
                        <p>
                            I'm a recent graduate from Auckland University of Technology (AUT), gaining a Bachelor's 
                            degree in Computer and Information Sciences, majoring in software development.
                            <br/>
                            <br/>
                            All my life I've surrounded myself around computers and computer-related technologies. 
                            Using this knowledge to create innovative products that help other people is something that 
                            I aspire to achieve in life.
                        </p>
                    </Col>
                    <Col align="center">
                        <img src={imageOfMe} alt="Me!" className="dp"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;