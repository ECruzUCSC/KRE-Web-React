import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import GuideHubTabs from "./GuideHubTabs";
import SubDivider from "../../common_ui/SubDivider";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import HeroGuideHeroSelect from "./HeroGuideHeroSelect";

function GuideHubMainBody() {
    return(
        <div>
            <Route path='/guides/hub'>
                <GuideHubTabs/>
            </Route>
            

            <Route path='/guides/hub/beginners'
                render={(props) => <SubDivider text="Beginner Guides"/>}
            />

            <Route path='/guides/hub/heroes'
                render={(props) => <SubDivider text="Hero Guides"/>}
            />
            <Route path='/guides/hub/heroes' exact component={HeroGuideHeroSelect}/>

            <Route path='/guides/hub/misc'
                render={(props) => <SubDivider text="Miscellaneous Guides"/>}
            />
        </div>
    );
}

export default GuideHubMainBody;