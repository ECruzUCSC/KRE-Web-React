import React from "react";
import "./kre_home.css";
import { Link } from "react-router-dom";
import home_button from "./assets/NavButtons/home_button_cropped_1.png";
import guide_button from "./assets/NavButtons/guide_button_cropped_1.png";
import resource_button from "./assets/NavButtons/resource_button_cropped_1.png";
import progress_button from "./assets/NavButtons/progress_button_cropped_1.png";
import about_button from "./assets/NavButtons/about_button.png";


function TopNavBar() {
    return (
        <div className="row topNav">


        <div className="col">
          <Link to="/">
            <button className="button btn-grad btn-grad-home align-middle" href="./index.html"><img src={home_button} alt="Home"/>Home</button>
          </Link>
        </div>
        <div className="col">
          <Link to="/guides/hub/beginners">
            <button className="button btn-grad btn-grad-guides" href="./guide_hub.html"><img src={guide_button} alt="Guides"/>Guides</button>
          </Link>
        </div>
        <div className="col">
          <button className="button btn-grad btn-grad-resources" href="./work_in_progress.html" ><img src={resource_button} alt="Resources"/>Resources</button>
        </div>
        <div className="col">
          <button className="button btn-grad btn-grad-progress" href="./work_in_progress.html"><img src={progress_button} alt="Progress"/>Progress</button>
        </div>
        <div className="col">
          <button className="btn-grad btn-grad-about" href="./work_in_progress.html"><img src={about_button} alt="About"/>About</button>
        </div>
      </div>
    );
}

export default TopNavBar;