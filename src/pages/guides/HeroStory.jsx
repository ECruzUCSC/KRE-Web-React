import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import HeroData from "../../data/HeroData";

function HeroStory(props) {
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
        <div>
            <div class="sub-content-bar">
                <div class="sub-content-bar-left">
                </div>

                <div class="sub-content-bar-middle">
                    <h1 class="hero-info-story-bar">Story</h1>
                </div>

                <div class="sub-content-bar-right">
                </div>
            </div>

            <div class="sub-content-prose">
                {hero.heroInfo.backstory.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}

            </div>
        </div>
    );
}

export default HeroStory;