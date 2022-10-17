import React, {useState, useEffect, createRef} from "react";
import { Container, Row, Col, Stack, Fade, ProgressBar } from 'react-bootstrap';

function ArtificialLoadingScreen(props) {

    // Perform some actions here...

    const [loadState, setLoadState] = useState(false);
    const [loadBar, setLoadBar] = useState(1);

    useEffect(()=> {
        if(!loadState) {
        const timer = setTimeout(()=> setLoadState(true), 4000);
        return (()=> clearTimeout(timer));
        }
    }, [loadState])

    useEffect(()=> {
        const load = loadBar + 10;

        if(!loadState) {
            const timer = setTimeout(()=> setLoadBar(load), 200);
            return (()=> clearTimeout(timer));
        }
    }, [loadBar])

    return(
        <>
            <Fade in={!loadState} onExiting={()=>props.pushLoadState()} unmountOnExit={true}>
            <div className="loading-screen">
                    <Container>
                        <Row>
                            <Col align="center">
                                <h4>Hello :)</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProgressBar now={loadBar}/>
                            </Col>
                        </Row>
                    </Container>
            </div>
            </Fade>
        </>
    );
};

export default ArtificialLoadingScreen;