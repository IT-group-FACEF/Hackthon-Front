import HeaderPage from "../LandingPage/HeaderPage";
import Home from "./Home";
import Unlock from "./Unlock.jsx";
import Achievements from "./Achievements.jsx";
import Calendar from "./Calendar.jsx";
import Caring from "./Caring.jsx";
import Footer from "../LandingPage/Footer";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPage />
      <main className="flex-grow">
        <Home />
        <Unlock />
        <Achievements />
        <Calendar />
        <Caring />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
