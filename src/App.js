import SiteBanner from "./common_ui/SiteBanner";
import TopNavBar from "./common_ui/TopNavBar";
import MainBody from "./common_ui/HomeMainBody";
import { BrowserRouter as Router} from 'react-router-dom';


function CustomApp() {
  return (
    <Router>
      <div className="container-fluid main-div">
        Fingus
        <SiteBanner />
        <TopNavBar />
        <MainBody />
      </div>
    </Router>
  );
  
}

export default CustomApp;
