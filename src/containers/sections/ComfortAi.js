import React from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import ComfortAiSC from '../../media/comfort-ai-sc.jpg';


function ComfortAi() {
    return (
        <>
        <div className="comfort-ai section">
            <Container>
                <Row>
                    <Col className="vert-center">
                        <h1>Comfort.AI Website</h1>
                    </Col>
                </Row>
                <Row style={{paddingTop: "30px"}}>
                    <Col align="center">
                        <img src={ComfortAiSC} alt="comfort-ai-screenshot" className="section-sc"/>
                    </Col>
                </Row>
                <Row style={{paddingTop: "70px"}}>
                    <Col md={1}></Col>
                    <Col md={8}>
                        <p>
                            In this ever-changing world, technology continues to evolve into something that benefit us 
                            in many different ways which can be fascinating as well as scary at times. One of these 
                            evolving technologies that is often feared by many ever since its first appearance in the 
                            Terminator is artificial intelligence, also known as AI.
                        </p>
                    </Col>
                </Row>
                <Row style={{paddingTop: "30px"}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <p>
                            Comfort.AI is a startup company that provides services towards schools and companies to 
                            educate people more about AI to ease the stigma that comes from the word, and make 
                            artificial intelligence their comfort zone.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingTop: "130px"}}>
                        <Stack gap={2}>
                            <h3>Objective</h3>
                            <p>
                                Without a website, Comfort.AI would have difficulties in exposing their brand especially 
                                in these difficult times of the covid pandemic. As an intern, I along with three other 
                                teammates were tasked to work together to develop and deploy a fully working website 
                                within one year. Because of this strict time constraint and with the team's limited 
                                skills in web development at the time, we decided to develop the website using WordPress.
                            </p>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingTop: "70px"}}>
                        <Stack gap={2}>
                            <h3>Development and Takeaways</h3>
                            <p>
                                Although we weren’t working with a lot of code during this project, a lot of hours were put 
                                in to planning and meetings in which I was able to gain skills in wireframing while designing 
                                the site. I was also able to get a good grasp of Agile development and project management as 
                                I was the team leader for the second half of our time working on the project. Furthermore, 
                                this allowed me to gain the confidence to communicate effectively with my team as well as the 
                                client.
                            </p>
                        </Stack>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="section-footer comfort-ai-footer">
                <Container>
                    <Row>
                        <Col>
                            <Stack gap={2}>
                                <h4>Date</h4>
                                <p>2020</p>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={2}>
                                <h4>Skills Gained</h4>
                                <ul>
                                    <li><p>WordPress development</p></li>
                                    <li><p>Agile methodologies</p></li>
                                    <li><p>Project management</p></li>
                                    <li><p>Wireframing</p></li>
                                </ul>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={2}>
                                <h4>Company</h4>
                                <p>Comfort.AI</p>
                            </Stack>
                        </Col>
                        <Col>
                            <Stack gap={2}>
                                <h4>Site</h4>
                                <p><a href="https://comfortai.co.nz">https://comfortai.co.nz</a></p>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
        </div>
        </>
    );
}

export default ComfortAi;