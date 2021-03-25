import React from "react";
import "./kre_home.css";
import "./kre_guide_hub.css";

function SubDivider(props) {
    return(
        <div className="sub-content-bar">
            <div className="sub-content-bar-left">
            </div>

            <div className="sub-content-bar-middle">
                <h1> {props.text}</h1>
            </div>

            <div className="sub-content-bar-right">
            </div>
        </div>
    );
}

export default SubDivider;