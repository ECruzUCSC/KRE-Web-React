import React from "react";
import "./kre_home.css";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import GuideLeftNavBar from "../pages/guides/GuideLeftNavBar"
import HomeMainBodyContent from "../pages/main/HomeMainBodyContent";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import GuideHubMainBody from "../pages/guides/GuideHubMainBody";
import HeroHub from "../pages/guides/HeroHub";

function MainBody() {
    return (
        <div className="row">
            <div className="col-2">
                <Route path="/" exact component={LeftNavBar} />
                <Route path="/guides" component={GuideLeftNavBar} />
            </div>
            
            <div className="col-8">
                <div className="centerContent body-panels">
                    <Route path="/" exact component={HomeMainBodyContent} />
                    <Route path="/guides" component={GuideHubMainBody} />
                    <Route path="/guides/heroes/" component={HeroHub}/>
                </div>
            </div>

            <div className="col-2">
                <Route path="/" component={RightNavBar} />
            </div>
        </div>
    );
}

export default MainBody;