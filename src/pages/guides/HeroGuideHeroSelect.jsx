import React from "react";
import { Link } from "react-router-dom";
import "../../common_ui/kre_home.css";
import "../../common_ui/kre_guide_hub.css";
import HeroPortraits from "../../data/GuideHubHeroPortraits";

import KnightBanner from "../../common_ui/assets/ClassBanners/KnightsIcon.png";
import WarriorBanner from "../../common_ui/assets/ClassBanners/WarriorsIcon.png";
import AssassinBanner from "../../common_ui/assets/ClassBanners/AssassinsIcon.png";
import ArcherBanner from "../../common_ui/assets/ClassBanners/ArchersIcon.png";
import MechanicBanner from "../../common_ui/assets/ClassBanners/MechanicsIcon.png";
import WizardBanner from "../../common_ui/assets/ClassBanners/WizardIcon.png";
import PriestBanner from "../../common_ui/assets/ClassBanners/PriestsIcon.png";

function HeroGuideHeroSelect() {

    return (

        <div>
            <div>
                <div className="class-banner">
                    <img src={KnightBanner} alt="" /><h2>KNIGHT</h2>
                </div>
                <div className="class-icons">

                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait1_aselica.png" alt="Aselica" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait2_clause.png" alt="Clause" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait3_demia.png" alt="Demia" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait4_dosarta.png" alt="Dosarta" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait5_glenwys.png" alt="Glenwys" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait6_jane.png" alt="Jane" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait7_loman.png" alt="Loman" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait8_morrah.png" alt="Morrah" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait9_neraxis.png" alt="Neraxis" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait10_phillop.png" alt="Phillop" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait11_ricardo.png" alt="Ricardo" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait12_shakmeh.png" alt="Shakmeh" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait13_sonia.png" alt="Sonia" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Knight/knight_portrait14_taily.png" alt="Taily" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={WarriorBanner} alt="" /> WARRIOR</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait1_bernheim.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait2_chase.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait3_dark_lord_kasel.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait4_gau.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait5_hilda.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait6_kasel.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait7_kirze.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait8_naila.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait9_nicky.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait10_priscilla.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait11_rebel_clause.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait12_riheet.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait13_scarlet.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait14_seria.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait15_theo.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Warrior/warrior_portrait16_viska.png" alt="" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={AssassinBanner} alt="" /> ASSASSIN</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait1_epis.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait2_erze.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait3_ezekiel.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait4_fluss.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait5_gladi.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait6_gremory.png" alt="" />


                    <Link to="/guides/heroes/Kibera/heroinfo">
                        <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait7_kibera.png" alt="" />
                    </Link>


                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait8_laudia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait9_mirianne.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait10_nia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait11_reina.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait12_ripine.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait13_roi.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Assassin/assassin_portrait14_tanya.png" alt="" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={ArcherBanner} alt="" /> ARCHER</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait1_arch.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait2_dimael.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait3_luna.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait4_requina.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait5_selene.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait6_shamilla.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait7_talisha.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait8_yanne.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait9_yuria.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Archer/archer_portrait10_zafir.png" alt="" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={MechanicBanner} alt="" /> MECHANIC</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait1_annette.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait2_cecilia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait3_chrisha.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait4_crow.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait5_hanus.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait6_kara.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait7_lakrak.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait8_miruru.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait9_mitra.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait10_oddy.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait11_pansirone.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Mechanic/mechanic_portrait12_rodina.png" alt="" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={WizardBanner} alt="" /> WIZARD</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait1_aisha.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait2_artemia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait3_cain.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait4_cleo.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait5_dakaris.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait6_esker.png" alt="" />

                    <Link to="/guides/heroes/Isolet/heroinfo">
                        <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait7_isolet.png" alt="" />
                    </Link>

                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait8_lewisia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait9_lilia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait10_lorraine.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait11_lucikiel.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait12_maria.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait13_nyx.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait14_ophelia.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait15_pavel.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait16_veronica.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Wizard/wizard_portrait17_xerah.png" alt="" />
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={PriestBanner} alt="" /> PRIEST</h2>
                </div>
                <div className="class-icons">
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait1_baudouin.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait2_cassandra.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait3_evan.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait4_fallen_frey.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait5_frey.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait6_juno.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait7_kaulah.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait8_laias.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait9_lavril.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait10_leo.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait11_lucias.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait12_may.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait13_mediana.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait14_rehartna.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait15_rephy.png" alt="" />
                    <img className="hero_portrait" src="/assets/HeroThumbnails/Priest/priest_portrait16_shea.png" alt="" />
                </div>
            </div>
        </div>
    );
}

function HeroGuideHeroSelectMap() {

    console.log(HeroPortraits.knight);

    return (

        <div>
            <div>
                <div className="class-banner">
                    <img src={KnightBanner} alt="" /><h2>KNIGHT</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.knight.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={WarriorBanner} alt="" /> WARRIOR</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.warrior.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={AssassinBanner} alt="" /> ASSASSIN</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.assassin.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={ArcherBanner} alt="" /> ARCHER</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.archer.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={MechanicBanner} alt="" /> MECHANIC</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.mechanic.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={WizardBanner} alt="" /> WIZARD</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.wizard.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="class-banner">
                    <h2><img src={PriestBanner} alt="" /> PRIEST</h2>
                </div>
                <div className="class-icons">
                    {HeroPortraits.priest.map((portrait) => (
                        <Link to={"/guides/heroes/" + portrait.heroName + "/heroinfo"}>
                            <img className="hero_portrait" src={portrait.imgURL} alt={portrait.heroName} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroGuideHeroSelectMap;