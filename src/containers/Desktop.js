import './App.css';
import React, {useState, useEffect, createRef} from 'react';
import File from '../components/File';

import AboutMe from './sections/AboutMe';
import ComfortAi from './sections/ComfortAi';
import ProjectNotes from './sections/ProjectNotes';
import ThisWebsite from './sections/ThisWebsite';

import { Container, Row, Col, Stack, Fade, Button } from 'react-bootstrap';

import Icon from '@mdi/react';

import Draggable from 'react-draggable';

import GridSystem from '../components/GridSystem';

import { mdiLinkedin, mdiGithub, mdiAccountCircle, mdiCloseCircle, mdiFolder } from '@mdi/js';


function Desktop(props) {
    const presetFiles = [
        {section: "project-notes", fileName: "Project:NOTES"}, 
        {section: "personal-website", fileName: "Personal Website"}, 
        {section: "comfort-ai", fileName: "Comfort.AI"}, 
        {section: "about", fileName: "About Elijah"}
    ] 

    const [fileSelect, setFileSelect] = useState("");
    const scrollRef = createRef(null);

    function sectionSelected(sectionName) {
        setFileSelect(sectionName);
    }

    useEffect(()=> {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, [fileSelect])

    const [folderSelect, setFolderSelect] = useState(false);
    const [disableWindows, setDisableWindows] = useState(true);

    useEffect(()=> {
        if(folderSelect) {
        setDisableWindows(false);
        }
        else {
        setDisableWindows(true);
        }
    }, [folderSelect])

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        setInterval(()=> {
        let newTime = new Date();
        setTime(newTime);
        }, 1000)
    }, [time])

    const [welcomeNotif, setWelcomeNotif] = useState(false);
    const [welcomeBuffer, setWelcomeBuffer] = useState(false);
    const [disableWelcome, setDisableWelcome] = useState(false);

    useEffect(()=> {
        if(welcomeBuffer) {
        // no action
        }
        else {
        const timer = setTimeout(()=> setWelcomeNotif(true), 2000);
        return (()=> clearTimeout(timer));
        }
    }, [welcomeNotif])

    useEffect(()=> {
        console.log(welcomeNotif);
        if(welcomeNotif === false) {
        setDisableWelcome(true);
        }
        else {
        setDisableWelcome(false);
        }
    }, [welcomeNotif])

    useEffect(()=> {
        setWelcomeBuffer(true);
    }, [welcomeBuffer])

    return (
        <>
        <div className="App-body">
            <Container>
            <Row>
                <Col align="center">

                <div className="folder" onClick={() => setFolderSelect(true)}>
                    <Icon
                    path={mdiFolder}
                    title="my-folder"
                    size={3}
                    color="#F8DB92"
                    />
                    <p>elijah's-folder</p>
                </div>

                {/*---------- ELIJAHS-FOLDER WINDOW ----------*/}

                <Draggable handle=".folder-handle" bounds=".App-body" disabled={disableWindows}>
                    <Fade in={folderSelect} unmountOnExit={true}>
                    <Container className="folder-window">
                    <Row className="folder-handle vert-center">
                        <Col align="left">
                        <p className="window-title">elijah's-folder</p>
                        </Col>
                        <Col xs={2}>
                        <Button variant="link" onClick={() => setFolderSelect(false)} disabled={disableWindows}>
                            <Icon
                            path={mdiCloseCircle}
                            size={1}
                            color="#CF5C36"
                            />
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        <GridSystem colCount={2} md={6}>
                        {
                            presetFiles.map((file, index) => {
                            const posOffset = index * 12;
                            let offsetLeft = `calc(40% + ${posOffset}px)`, offsetTop = `calc(40% + ${posOffset}px)`;
                            return(
                                <File
                                key={index}
                                section={file.section}
                                fileName={file.fileName}
                                sectionSelected={sectionSelected}
                                offsetLeft={offsetLeft}
                                offsetTop={offsetTop}
                                disabled={disableWindows}
                                />
                            )
                            })
                        }
                        </GridSystem>         
                    </Row>
                    </Container>
                    </Fade>
                </Draggable>

                {/*---------- WELCOME WINDOW ----------*/}

                <Draggable handle=".welcome-handle" bounds=".App-body" disabled={disableWelcome}>
                    <Fade in={welcomeNotif} unmountOnExit={true}>
                    <Container className="welcome-window">
                        <Row className="welcome-handle vert-center">
                        <Col align="left">
                            <p className="window-title">welcome-user!</p>
                        </Col>
                        <Col xs={2}>
                            <Button variant="link" onClick={() => setWelcomeNotif(false)} disabled={disableWelcome}>
                            <Icon
                                path={mdiCloseCircle}
                                size={1}
                                color="#CF5C36"
                            />
                            </Button>
                        </Col>
                        </Row>
                        <Row style={{padding: "10px"}}>
                        <Col align="left">
                            <p style={{margin: "0px"}}>
                            Hello user, my name is Elijah and welcome to my personal site! 
                            Feel free to look around and enjoy :)
                            </p>
                        </Col>
                        </Row>
                    </Container>
                    </Fade>
                </Draggable>

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