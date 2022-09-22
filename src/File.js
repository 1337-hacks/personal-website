import React from "react";

function File(props) {

    return(
        <div
            className="file"
            style={{left: props.offset}}
            onClick={()=> props.sectionSelected(props.section)}
        >
            <p style={{fontSize: "10px"}}>{props.section}</p>
        </div>
    )
}

export default File;