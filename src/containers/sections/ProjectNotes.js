import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import ProjectNotesSC from '../../media/project-notes-sc.jpg';

function ProjectNotes() {

    return (
        <>
        <div className="project-notes section">
            <Container>
                <Stack gap={5}>
                    <div>
                        <Row>
                            <Col className="vert-center">
                                <h1>Project:NOTES</h1>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: "30px"}}>
                            <Col align="center">
                                <img src={ProjectNotesSC} alt="project-notes-screenshot" className="section-sc"/>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <p>
                                Note-taking. It’s an essential activity that students do every day, whether they're in a 
                                lecture or studying for an exam. Yet, our note-taking apps today can be somewhat confusing 
                                to navigate around or difficult to use, which should not be for the simple task of taking 
                                notes. Project:NOTES is an attempt to solve this problem, providing the user with an easy 
                                to understand UI and a natural note-taking experience so the user can get done with what 
                                they were looking to do in the first place - take notes.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Stack gap={3}>
                                <h2>Key Features</h2>
                                <ul>
                                    <Stack gap={3}>
                                        <li><p>Create, edit and delete notes</p></li>
                                        <li><p>Drag notes around the workspace to group/separate notes to your liking</p></li>
                                        <li><p>Add new workspaces to work on separate sets of notes</p></li>
                                        <li><p>Added pomodoro timer for tracking your time studying</p></li>
                                    </Stack>
                                </ul>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Currently, this app is still a work-in-progress. You can check out the GitHub repository 
                                below for updates on the project!
                            </p>
                        </Col>
                    </Row>
                </Stack>
            </Container>
            
        </div>
        <a href="https://github.com/1337-hacks/Project-NOTES" className="project-notes-repo-link">
            <div className=" section-footer project-notes-footer">
                    <Container>
                        <Row>
                            <Col className="vert-center" style={{justifyContent: "center"}}>
                                <h4>Project:NOTES Repo</h4>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </a>
        </>
    );
}

export default ProjectNotes;