import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { AuthWrapper } from "../components/Routes";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const HomeScreen = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  if (isAuthenticated) {
    dispatch(setUser({ ...user }));
  }
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
