import HeaderPage from "../LandingPage/HeaderPage";
import Home from "./Home";
import Sponsors from "../LandingPage/Sponsors";
import Community from "../LandingPage/Community";
import BodyPage from "../LandingPage/BodyPage";
import Footer from "../LandingPage/Footer";

function HomePage() {
  return (
    <div>
      <HeaderPage />
      <Home />
      <Sponsors />
      <Community />
      <BodyPage />
      <Footer />
    </div>
  );
}

export default HomePage;
