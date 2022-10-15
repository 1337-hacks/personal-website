import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Fade, Button } from 'react-bootstrap';
import Draggable from 'react-draggable';
import Icon from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';

function WelcomeWindow(props) {

    const [welcomeNotif, setWelcomeNotif] = useState(false);
    const [welcomeBuffer, setWelcomeBuffer] = useState(false);
    const [disableWelcome, setDisableWelcome] = useState(false);

    useEffect(()=> {
        if(!welcomeBuffer) {
            const timer = setTimeout(()=> setWelcomeNotif(true), 3000);
            return (()=> clearTimeout(timer));
        }
    }, [welcomeNotif])

    useEffect(()=> {
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
        </>
    );
}

export default WelcomeWindow;