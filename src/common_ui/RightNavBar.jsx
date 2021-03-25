import React from "react";
import "./kre_home.css";

function RightNavBar(props) {
    return(
        <div className="rightNav body-panels">
            <div className="row side-nav-header">
                <h1>RELATED SITES</h1>
            </div>
            <div className="row side-nav-elements">
                <ul>
                    <li>KR EN Community</li>
                    <li>KR Index</li>
                    <li>Shal's Youtube Channel</li>
                </ul>
            </div>
        </div>
    );
}

export default RightNavBar;