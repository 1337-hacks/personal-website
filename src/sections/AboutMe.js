import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageOfMe from '../images/me.jpg';

function AboutMe() {

    const [greeting, setGreeting] = useState("xxx");

    const [time, setTime] = useState(new Date().getHours());

    useEffect(()=> {
        setInterval(()=> {
            let newTime = new Date().getHours();
            setTime(newTime);
        }, 1000)
    }, [time]);

    useEffect(()=> {
        if(time < 12) {
            setGreeting("morning");
        }
        else if(time >= 12 && time < 18) {
            setGreeting("afternoon");
        }
        else {
            setGreeting("evening");
        }
    }, [time]);

    return (
        <div className="about-me section">
            <Container>
                <Row className="row-padding">
                    <Col md={6} className="vert-center">
                        <div>
                            <h1>Good {greeting},</h1>
                            <h1>I'm Elijah!</h1>
                        </div>
                    </Col>
                    <Col align="center" md={6}>
                        <img src={imageOfMe} alt="Me!" className="dp"/>
                    </Col>
                </Row>
                <Row style={{paddingTop: "70px"}}>
                    <Col md={7} style={{paddingLeft: "50px"}}>
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
                </Row>
                <Row style={{paddingTop: "100px"}}>
                    <Col align="center">
                        <h2>Current technologies learning</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;