import $ from "jquery";

function constructHero() {

    var url = "https://ecruzucsc.github.io/KRE_Project_Site/guides/IsoletData.json";
    $.getJSON(url, function(jd) {
        console.log(jd.name);
    });

    return;
}

export default constructHero;