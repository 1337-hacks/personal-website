import './App.css';
import React, {useState, useEffect, createRef} from 'react';

import FolderWindow from '../components/FolderWindow';
import WelcomeWindow from '../components/WelcomeWindow';

import AboutMe from './sections/AboutMe';
import ComfortAi from './sections/ComfortAi';
import ProjectNotes from './sections/ProjectNotes';
import ThisWebsite from './sections/ThisWebsite';

import { Container, Row, Col, Stack, Fade, Button } from 'react-bootstrap';
import { mdiLinkedin, mdiGithub, mdiAccountCircle, mdiCloseCircle, mdiFolder } from '@mdi/js';

import Icon from '@mdi/react';

import Draggable from 'react-draggable';

import GridSystem from '../components/GridSystem';


function Desktop(props) {

    const [fileSelect, setFileSelect] = useState("");
    const scrollRef = createRef(null);

    function sectionSelected(sectionName) {
        setFileSelect(sectionName);
    }

    useEffect(()=> {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, [fileSelect])

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        setInterval(()=> {
        let newTime = new Date();
        setTime(newTime);
        }, 1000)
    }, [time])

    return (
        <>
        <div className="App-body">
            <Container>
            <Row>
                <Col align="center">

                <FolderWindow getSection={sectionSelected} files={props.files}/>

                <WelcomeWindow/>

                </Col>
            </Row>

            {/*---------- WINDOW TASKBAR ----------*/}
            
            <Row className="window-taskbar">
                <Col style={{paddingLeft: "20px"}}>
                <Stack gap={1} direction="horizontal">
                    <Button variant="link" href="https://www.linkedin.com/in/elijah-nucum-b30673208/">
                    <Icon
                        path={mdiLinkedin}
                        title="linkedIn"
                        size={1}
                        color="#D3D5D7"
                    />
                    </Button>
                    
                    <Button variant="link" href="https://github.com/1337-hacks">
                    <Icon
                        path={mdiGithub}
                        title="github"
                        size={1}
                        color="#D3D5D7"
                    />
                    </Button>
                    
                    <Button variant="link">
                    <Icon
                        path={mdiAccountCircle}
                        title="contact"
                        size={1}
                        color="#D3D5D7"
                    />
                    </Button>
                    
                </Stack>
                </Col>
                <Col align="right">
                <p>{time.toLocaleString([], {hour: '2-digit', minute:'2-digit'})} | {time.toLocaleDateString()}</p>
                </Col>
            </Row>
            </Container>
        </div>
        
        { 
            fileSelect === "project-notes" ?
            <div ref={scrollRef}><ProjectNotes/></div>
            : fileSelect === "personal-website" ?
            <div ref={scrollRef}><ThisWebsite/></div>
            : fileSelect === "comfort-ai" ?
            <div ref={scrollRef}><ComfortAi/></div> 
            : fileSelect === "about" ?
            <div ref={scrollRef}><AboutMe/></div>
            : <div ref={scrollRef}></div>
        }
        </>
    );
}

export default Desktop;