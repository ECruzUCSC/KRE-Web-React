import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import ManaCrystal from "../../common_ui/assets/HeroInfo/mana_crystals.png";

function HeroSkill(props) {
    return(
        <div className="hero-skill skill1">
            <div className="skill-info">
                <div className="skill-image">
                    <div className="skill-image-second-border">
                        <img src={"/assets/HeroInfo/" + props.heroClass + "/" + props.heroName + "/s" + props.skillNumber + ".png"} alt="S1"></img>
                    </div>
                </div>
                <div className="skill-details">
                    <h1>{"Skill " + props.skillNumber + ": " + props.skillName}</h1>
                    <h4>{"Cooldown: " + props.cooldown}</h4>
                    <h4>{"Mana: " + props.mana}</h4>
                </div>
            </div>
            <div className="skill-description">
                {props.description}
            </div>
        </div>
    );
}

export default HeroSkill;