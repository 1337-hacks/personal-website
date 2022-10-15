import React from "react";
import { Container, Row, Col, Stack, Fade, Button } from 'react-bootstrap';

function LoadingScreen() {

    // Perform some actions here...

    return(
        <>
            <div className="loading-screen">
                <Container>
                    <Row>
                        <Col align="center">

                        <h4>Hello :)</h4>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LoadingScreen;