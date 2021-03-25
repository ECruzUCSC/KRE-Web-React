import React from "react";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import $ from "jquery";
import HeroData from "../../data/HeroData";

/*
function constructHero() {

    var segment_str = window.location.pathname;
    var segment_array = segment_str.split( '/' );
    var segment_hero_name = segment_array.pop();
    segment_hero_name = segment_array.pop();
    console.log(segment_hero_name);

    var url = "https://ecruzucsc.github.io/KRE_Project_Site/guides/IsoletData.json";
    $.getJSON(url, function(jd) {
        var currentHero;
        
        for(var i = 0; i < jd.hero.length; i++) {

            if(jd.hero[i].heroName === segment_hero_name) {
                currentHero = jd.hero[i];
            }
        }
        
        
        $("#Card-Hero-Name").text(currentHero.heroName);
        $("#Title").text(currentHero.heroInfo.title);
        $("#Position").text("Position: " + currentHero.position);
        $("#Dps-Type").text("Dps Type: " + currentHero.dpsType);
        $("#Gender").text("Gender: " + currentHero.heroInfo.gender);
        $("#Height").text("Height: " + currentHero.heroInfo.height);
        $("#Race").text("Race: " + currentHero.heroInfo.race);
        $("#Constellation").text("Constellation: " + currentHero.heroInfo.constellation);
        $("#Birthday").text("Birthday: " + currentHero.heroInfo.birthday);
        $("#Likes").text("Likes: " + currentHero.heroInfo.likes);
        $("#Dislikes").text("Dislikes: " + currentHero.heroInfo.dislikes);
        
        

        console.log(window.location.href);
    });

    return null;
}

function HeroInfoCard(props) {
    return(
        <div className="hero-info-panel">


            <div className="hero-info-bg">
            </div>

            <div className="hero-name-ribbon">
                <h1 id="Card-Hero-Name"></h1>
                <span id="Title"/>
            </div>

            {constructHero("Isolet")}

            <div className="hero-info-main">
                <span id="Position"/>
                <span id="Dps-Type"/>
                <span id="Gender"/>
                <span id="Age"/>
                <span id="Height"/>
                <span id="Race"/>
                <span id="Constellation"/>
                <span id="Birthday"/>
                <span id="Likes"/>
                <span id="Dislikes"/>
            </div>

            <div className="class-ribbon">
                Wizard<img src="/assets/ClassBanners/WizardIcon.png"></img>
            </div>

            
        </div>
    );
}
*/

function HeroInfoCardOffline(props) {
    var segment_str = window.location.pathname;
    var segment_array = segment_str.split( '/' );
    var segment_hero_name = segment_array.pop();
    segment_hero_name = segment_array.pop();
    console.log(segment_hero_name);

    var hero;

    for(var i = 0; i < HeroData.length; i++) {
        if(segment_hero_name === HeroData[i].heroName) {
            hero = HeroData[i];
        }
    }

    var bgImageStyle = {
        backgroundImage: "url(/assets/HeroInfo/" + hero.heroClass + "/" + segment_hero_name + "/" + segment_hero_name + "_charinfo.png)"
    }

    return(
        <div className="hero-info-panel">


            <div className="hero-info-bg" style={bgImageStyle}>
            </div>

            <div className="hero-name-ribbon">
                <h1 id="Card-Hero-Name">{hero.heroName}</h1>
                <span id="Title">{hero.heroInfo.title}</span>
            </div>

            <div className="hero-info-main">
                <span id="Position">Position: {hero.position}</span>
                <span id="Dps-Type">DPS Type: {hero.dpsType}</span>
                <span id="Gender">Gender: {hero.heroInfo.gender}</span>
                <span id="Age">Age: {hero.heroInfo.age}</span>
                <span id="Height">Height: {hero.heroInfo.height}</span>
                <span id="Race">Race: {hero.heroInfo.race}</span>
                <span id="Constellation">Constellation: {hero.heroInfo.constellation}</span>
                <span id="Birthday">Birthday: {hero.heroInfo.birthday}</span>
                <span id="Likes">Likes: {hero.heroInfo.likes}</span>
                <span id="Dislikes">Dislikes: {hero.heroInfo.dislikes}</span>
            </div>

            <div className="class-ribbon">
                {hero.heroClass}<img src="/assets/ClassBanners/WizardIcon.png"></img>
            </div>

            
        </div>
    );
}

export default HeroInfoCardOffline;