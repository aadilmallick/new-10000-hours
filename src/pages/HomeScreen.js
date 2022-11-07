import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
const HomeScreen = () => {
  return (
    <>
      <header id="header-home">
        <div className="container">
          <Navbar />
          <HeaderContent />
        </div>
        <div className="spacer red-stacked-layer"></div>
      </header>
      <ProgressSection />
      <Footer />
    </>
  );
};

const HeaderContent = () => {
  return (
    <>
      <div className="header-content text-center">
        <h1>10000 HOURS</h1>
        <h2>Starts Here</h2>
      </div>
    </>
  );
};
export { HomeScreen };
