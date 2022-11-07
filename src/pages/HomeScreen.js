import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { AuthWrapper } from "../components/Routes";
import { useAuth0 } from "@auth0/auth0-react";

const HomeScreen = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <header id="header-home">
        <div className="container">
          <Navbar />
          <HeaderContent />
        </div>
        <div className="spacer red-stacked-layer"></div>
      </header>
      {isAuthenticated && <ProgressSection />}
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
