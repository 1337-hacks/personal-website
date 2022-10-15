import React from 'react';
import Container from 'react-bootstrap/Container';
import Icon from '@mdi/react'
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <Container>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                
                    <Icon
                    path={mdiLinkedin}
                    title="linkedIn"
                    size={1}
                    color="#D3D5D7"
                    />
                    <Icon
                    path={mdiGithub}
                    title="linkedIn"
                    size={1}
                    color="#D3D5D7"
                    />
                    <Icon
                    path={mdiAccountCircle}
                    title="linkedIn"
                    size={1}
                    color="#D3D5D7"
                    />
                
                    <p>Elijah Nucum {year}</p>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;