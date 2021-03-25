import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import HeroData from "../../data/HeroData";

function HeroGuide(props) {
    var segment_str = window.location.pathname;
    var segment_array = segment_str.split('/');
    var segment_hero_name = segment_array.pop();
    segment_hero_name = segment_array.pop();

    var hero;

    for (var i = 0; i < HeroData.length; i++) {
        if (segment_hero_name === HeroData[i].heroName) {
            hero = HeroData[i];
        }
    }

    return (
        <div id="guide">
            <div className="sub-content-bar">
                <div className="sub-content-bar-left">
                </div>

                <div className="sub-content-bar-middle">
                    <h1>{hero.heroName} Basics Guide</h1>
                </div>

                <div className="sub-content-bar-right">
                </div>
            </div>

            <div className="gdocs-embed">
                <iframe src={hero.docsGuide}></iframe>
            </div>
        </div>
    );
}

export default HeroGuide;