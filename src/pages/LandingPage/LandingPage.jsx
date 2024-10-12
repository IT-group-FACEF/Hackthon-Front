import HeaderPage from "../LandingPage/HeaderPage";
import Home from "./Home";
import Sponsors from "../LandingPage/Sponsors";
import Community from "../LandingPage/Community";
import BodyPage from "../LandingPage/BodyPage";

function HomePage() {
  return (
    <div>
      <HeaderPage />
      <Home />
      <Sponsors />
      <Community />
      <BodyPage />
    </div>
  );
}

export default HomePage;
