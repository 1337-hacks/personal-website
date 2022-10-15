import React, {useState, useEffect, createRef} from 'react';
import { Container, Row, Col, Stack, Fade, Button } from 'react-bootstrap';
import { mdiCloseCircle, mdiFolder } from '@mdi/js';
import Icon from '@mdi/react';
import Draggable from 'react-draggable';
import GridSystem from '../components/GridSystem';
import File from '../components/File';

function FolderWindow(props) {

    const [fileSelect, setFileSelect] = useState("");

    function sectionSelected(sectionName) {
        setFileSelect(sectionName);
    }

    useEffect(()=> {
        props.getSection(fileSelect);
    })

    const [folderSelect, setFolderSelect] = useState(false);

    return(
        <>
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

            <Draggable handle=".folder-handle" bounds=".App-body" disabled={!folderSelect}>
                <Fade in={folderSelect} unmountOnExit={true}>
                <Container className="folder-window">
                <Row className="folder-handle vert-center">
                    <Col align="left">
                    <p className="window-title">elijah's-folder</p>
                    </Col>
                    <Col xs={2}>
                    <Button variant="link" onClick={() => setFolderSelect(false)} disabled={!folderSelect}>
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
                        props.files.map((file, index) => {
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
                                disabled={!folderSelect}
                            />
                        )
                        })
                    }
                    </GridSystem>         
                </Row>
                </Container>
                </Fade>
            </Draggable>
        </>
    )
}

export default FolderWindow;