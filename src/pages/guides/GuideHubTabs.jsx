import React from "react";
import { Link } from "react-router-dom";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import $ from "jquery";

function underlineFocus(e) {
    $(".guide-button").removeClass("guide-button-focus");
    $(e.target).addClass("guide-button-focus");
}


function GuideHubTabs() {
    return (
        <div className="row no-gutters">
            <div className="col guide-tab">
                <Link to="/guides/hub/beginners">
                    <button className="button guide-button guide-button-focus" onClick={underlineFocus}>Beginner</button>
                </Link>
            </div>
            <div className="col guide-tab">
                <Link to="/guides/hub/heroes">
                    <button id="trial" className="button guide-button" onClick={underlineFocus}>Hero</button>
                </Link>
            </div>
            <div className="col guide-tab">
                <Link to="/guides/hub/misc">
                    <button className="button guide-button" onClick={underlineFocus}>Misc.</button>
                </Link>
            </div>
        </div>
    );
}






export default GuideHubTabs;