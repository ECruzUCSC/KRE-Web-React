import React from "react";
import { Link } from "react-router-dom";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import $ from "jquery";

function underlineFocus(e) {
    $(".guide-button").removeClass("guide-button-focus");
    $(e.target).addClass("guide-button-focus");
}



function HeroHubTabs(props) {

    
    const currentURL = "/guides/heroes/" + props.heroName;

    return(
        <div class="row no-gutters">
            <div class="col guide-tab">
                <Link to={currentURL + "/heroinfo"}>
                    <button class="button guide-button guide-button-focus" onClick={underlineFocus}>Hero Info</button>
                </Link>
            </div>
            <div class="col guide-tab">
                <Link to={currentURL + "/skillinfo"}>
                    <button class="button guide-button" onClick={underlineFocus}>Skill Info</button>
                </Link>
            </div>
            <div class="col guide-tab">
                <Link to= {currentURL + "/guide"}>
                    <button class="button guide-button" onClick={underlineFocus}>Guide</button>
                </Link>
            </div>
            <div class="col guide-tab">
                <button class="button guide-button" href="https://www.krindex.net/heroes/Isolet" target="_blank">KR Index</button>
            </div>
        </div>
    );
}

export default HeroHubTabs;
