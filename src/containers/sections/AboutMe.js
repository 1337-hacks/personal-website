import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Stack, ProgressBar } from 'react-bootstrap';
import imageOfMe from '../../media/me.jpg';
import Icon from '@mdi/react';
import { mdiTailwind } from '@mdi/js'; 
import { mdiReact } from '@mdi/js'; 
import { mdiLanguageTypescript } from '@mdi/js';

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
                <Row style={{paddingTop: "100px", paddingLeft: "50px"}}>
                    <Col style={{paddingLeft: "0px"}} md={6}>
                        <Stack gap={3}>
                            <h2>A bit about me...</h2>
                            <ul>
                                <Stack gap={3}>
                                    <li><p>Well-versed in JavaScript, HTML, CSS</p></li>
                                    <li><p>Has experience with SQL, PHP, Python, C and C#</p></li>
                                    <li><p>A keen learner of web technologies</p></li>
                                    <li><p>Knowledgeable in Agile development</p></li>
                                    <li><p>An active person who is into weightlifting and playing badminton</p></li>
                                    <li><p>Loves listening to music</p></li>
                                    <li><p>A veteran in Clash of Clans</p></li>
                                </Stack>
                            </ul>
                        </Stack>
                    </Col>
                    <Col md={5} style={{paddingLeft: "150px"}}>
                        <Stack gap={5}>
                            <div>
                                React Node Development
                                <ProgressBar animated now={90}/>
                            </div>
                            <div>
                                Agile Methodologies
                                <ProgressBar animated now={80}/>
                            </div>
                            <div>
                                Project Management
                                <ProgressBar animated now={75}/>
                            </div>
                            
                        </Stack>
                    </Col>
                </Row>
                <Row style={{paddingTop: "100px"}}>
                    <Col align="center">
                        <h2>Current technologies learning:</h2>
                    </Col>
                </Row>
                <Row align="center" style={{paddingTop: "40px"}}>
                    <Col>
                        <div className="learning-card" >
                            <a href="https://tailwindcss.com/">
                            <Icon 
                                path={mdiTailwind}
                                size={3}
                                color="#E37C7C"
                            />
                            </a>
                        </div>
                    <p>Tailwind CSS</p>
                    </Col>
                    <Col>
                        <div className="learning-card" >
                            <a href="https://redux.js.org/">
                            <Icon 
                                path={mdiReact}
                                size={3}
                                color="#7C86E3"
                            />
                            </a>
                        </div>
                    <p>Redux</p>
                    </Col>
                    <Col>
                        <div className="learning-card">
                            <a href="https://www.typescriptlang.org/">
                            <Icon 
                                path={mdiLanguageTypescript}
                                size={3}
                                color="#7CE386"
                            />
                            </a> 
                        </div>
                    <p>TypeScript</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;