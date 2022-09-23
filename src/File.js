import React from "react";

function File(props) {

    return(
        <div
            className="file"
            style={{left: props.offsetLeft, top: props.offsetTop, backgroundColor: props.bgColor}}
            onClick={()=> props.sectionSelected(props.section)}
        >
            <p style={{fontSize: "10px"}}>{props.fileName}</p>
        </div>
    )
}

export default File;