import './App.css';
import React, {useState, useEffect, createRef} from 'react';
import File from './File';
import AboutMe from './sections/AboutMe';
import ComfortAi from './sections/ComfortAi';
import ProjectNotes from './sections/ProjectNotes';
import ThisWebsite from './sections/ThisWebsite';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '@mdi/react';
import { mdiFolder } from '@mdi/js';
import Footer from './Footer';

import Draggable from 'react-draggable';
import Fade from 'react-bootstrap/Fade';
import { mdiCloseCircle } from '@mdi/js';

import GridSystem from './GridSystem';

import Stack from 'react-bootstrap/Stack';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import Button from 'react-bootstrap/Button';

function App() {

  const presetFiles = [
    {section: "project-notes", fileName: "Project:NOTES"}, 
    {section: "personal-website", fileName: "Personal Website"}, 
    {section: "comfort-ai", fileName: "Comfort.AI"}, 
    {section: "about", fileName: "About Elijah"}
  ]

  const presetColorFiles = ["#E0A167", "#FFBE8E", "#F8DB92"]

  const [fileSelect, setFileSelect] = useState("");
  const scrollRef = createRef(null);

  function sectionSelected(sectionName) {
    setFileSelect(sectionName);
  }

  useEffect(()=> {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [fileSelect]);

  const [folderSelect, setFolderSelect] = useState(false);

  const [time, setTime] = useState(new Date());

  useEffect(()=> {
    setInterval(()=> {
      let newTime = new Date();
      setTime(newTime);
    }, 1000)
  }, [time])

  const [welcomeNotif, setWelcomeNotif] = useState(false);
  const [welcomeBuffer, setWelcomeBuffer] = useState(false);

  useEffect(()=> {
    if(welcomeBuffer) {
      console.log("Entered");
    }
    else {
      const timer = setTimeout(()=> setWelcomeNotif(true), 2000);
      return (()=> clearTimeout(timer));
    }
  }, [welcomeNotif]);

  useEffect(()=> {
    setWelcomeBuffer(true);
  }, [welcomeBuffer]);

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
                <p>my-folder</p>
              </div>

              <Draggable handle=".folder-handle" bounds=".App-body">
                <Fade in={folderSelect}>
                <Container className="folder-window">
                  <Row className="folder-handle">
                    <Col xs={2} align="left">
                      <Button variant="link" onClick={() => setFolderSelect(false)}>
                        <Icon
                          path={mdiCloseCircle}
                          size={1}
                          color="#CF5C36"
                        />
                      </Button>
                    </Col>
                    <Col align="center">
                      my-folder
                    </Col>
                    <Col xs={2}></Col>
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
                              bgColor={presetColorFiles[index]}
                            />
                          )
                        })
                      }
                    </GridSystem>         
                  </Row>
                </Container>
                </Fade>
              </Draggable>

              <Draggable handle=".welcome-handle" bounds=".App-body">
                <Fade in={welcomeNotif}>
                  <Container className="notif-window">
                    <Row className="welcome-handle">
                      <Col xs={2} align="left">
                        <Button variant="link" onClick={() => setWelcomeNotif(false)}>
                          <Icon
                            path={mdiCloseCircle}
                            size={1}
                            color="#CF5C36"
                          />
                        </Button>
                      </Col>
                      <Col align="center">
                        welcome-user!
                      </Col>
                    </Row>
                    <Row>
                      <Col align="left">
                        <p>
                          Hello user, welcome to my personal site! Feel free to look around and chill B) - Elijah
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Fade>
              </Draggable>

            </Col>
          </Row>
          
          <Row className="window-menu">
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

      {/* {fileSelect && <Footer/>} */}
    </>
    
  );
}

export default App;
