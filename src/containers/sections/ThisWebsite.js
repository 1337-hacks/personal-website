import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function ThisWebsite() {

    return (
        <div className="this-website section">
            <Container>
                <Row>
                    <Col>
                        <p>This Website</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ThisWebsite;