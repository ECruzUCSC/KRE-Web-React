import React from "react";
import "../../common_ui/kre_home.css";
import { Link } from "react-router-dom";

function LeftNavBar(props) {
    return(
        <div className="leftNav body-panels">
            <div className="row side-nav-header">
                <h1>GUIDE</h1>
            </div>
            <div className="row side-nav-elements">
                <ul>
                    <li>Beginner's Guides</li>
                    <Link to="/guides/hub/heroes">
                        <li>Hero Guides</li>
                    </Link>
                    <li>Miscellaneous</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNavBar;