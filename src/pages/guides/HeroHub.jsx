import React from "react";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import HeroHubTabs from "./HeroHubTabs";
import HeroInfoCard from "./HeroInfoCard";
import HeroStory from "./HeroStory";
import HeroSkillInfo from "./HeroSkillInfo";
import HeroGuide from "./HeroGuide";

function HeroHub(props) {
    var segment_str = window.location.pathname;
    var segment_array = segment_str.split( '/' );
    var heroNameURL = segment_array.pop();
    heroNameURL = segment_array.pop();


    return (
        <div>
            <HeroHubTabs heroName={heroNameURL}/>

            <Route path={'/guides/heroes/' + heroNameURL + '/heroinfo'}>
                <HeroInfoCard/>
                <HeroStory/>
            </Route>


            <Route path={'/guides/heroes/' + heroNameURL + '/skillinfo'}>
                <HeroSkillInfo/>
            </Route>

            <Route path={'/guides/heroes/' + heroNameURL + '/guide'}>
                <HeroGuide/>
            </Route>
        </div>
    );
}

export default HeroHub;