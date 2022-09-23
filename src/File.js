import React from "react";
import { mdiFileDocument } from '@mdi/js';
import Icon from '@mdi/react';

function File(props) {

    return(
        <div
            className="file"
            onClick={()=> props.sectionSelected(props.section)}
        >
            <Icon
                path={mdiFileDocument}
                title={props.fileName}
                size={2}
                color="white"
            />
            <p style={{fontSize: "10px"}}>{props.fileName}</p>
        </div>
    )
}

export default File;