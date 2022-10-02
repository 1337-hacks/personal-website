import React from "react";
import { mdiFileDocument } from '@mdi/js';
import Icon from '@mdi/react';
import Button from 'react-bootstrap/Button';

function File(props) {

    return(
        <Button variant="link" onClick={()=> props.sectionSelected(props.section)} disabled={props.disabled}>
            <div
                className="file"
            >
                <Icon
                    path={mdiFileDocument}
                    title={props.fileName}
                    size={2}
                    color="white"
                />
                <p style={{fontSize: "10px"}}>{props.fileName}</p>
            </div>
        </Button>
        
    )
}

export default File;