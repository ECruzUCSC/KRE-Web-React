import React from "react";
import "./kre_home.css";
import kre_logo from "./assets/KRE_logo-White.png"

function SiteBanner() {
    return (

    <div id="topBar" className="row">
        <img id="top_logo" src={kre_logo} alt="King's Raid Encyclopedia"/>
    </div>

    );
}

export default SiteBanner;