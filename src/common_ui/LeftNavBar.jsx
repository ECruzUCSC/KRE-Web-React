import React from "react";
import "./kre_home.css";

function LeftNavBar(props) {
    return(
        <div className="leftNav body-panels">
            <div className="row side-nav-header">
                <h1>ABOUT</h1>
            </div>
            <div className="row side-nav-elements">
                <ul>
                    <li>Beginner's Guides</li>
                    <li>Team Composition Basics</li>
                    <li>KRE Discord Server Link</li>
                    <li>KRE Administration: No Freedom</li>
                    <li>Word of the Week: P*ggers</li>
                    <li>Spicy Bejeweled</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNavBar;