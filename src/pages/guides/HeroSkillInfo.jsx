import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import SubDivider from "../../common_ui/SubDivider";
import HeroSkill from "./HeroSkill";
import $ from "jquery";
import HeroData from "../../data/HeroData";





function weTryThese() {
    
}

function weTryThose() {
    var data;

    data = constructHeroSkills(function(jd) 
    {
       return(jd);
    })

    console.log(data);
}

function constructHeroSkills(callback) {

    var segment_str = window.location.pathname;
    var segment_array = segment_str.split( '/' );
    var segment_hero_name = segment_array.pop();
    segment_hero_name = segment_array.pop();
    console.log(segment_hero_name);

    var url = "https://ecruzucsc.github.io/KRE_Project_Site/guides/IsoletData.json";
    
    $.getJSON(url, function(jd) {
        callback(jd);
    });



    return null;
}

function SkillInfo() {
    var segment_str = window.location.pathname;
    var segment_array = segment_str.split( '/' );
    var segment_hero_name = segment_array.pop();
    segment_hero_name = segment_array.pop();
    console.log(segment_hero_name);

    var hero;
    var skills;

    for(var i = 0; i < HeroData.length; i++) {
        if(segment_hero_name === HeroData[i].heroName) {
            hero = HeroData[i];
            skills = HeroData[i].skillInfo.skill;
        }
    }




    return (
        <div id="skill-info">
            
            <SubDivider text="Skill Info"></SubDivider>

            {skills.map((skill) => (
                <HeroSkill
                    heroName={hero.heroName}
                    heroClass={hero.heroClass}
                    skillNumber={skill.skillNumber}
                    skillName={skill.skillName}
                    cooldown={skill.cooldown}
                    mana={skill.mana}
                    description={skill.skillDescription}
                />
            ))}
        </div>
    );
}

export default SkillInfo;