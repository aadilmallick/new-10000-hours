import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ onAbout }) => {
  const linklist = [
    { url: "/", text: "home" },
    { url: "/about", text: "about" },
  ];
  const { isAuthenticated, isLoading, error, loginWithPopup } = useAuth0();

  if (onAbout) {
    return (
      <div className="container">
        <nav id="about-nav">
          <img
            src="../../images/icons/logo-light.png"
            alt="my portfolio"
            className="navbar-logo"
          />
          <ul>
            {linklist.map((link) => (
              <Navlink
                url={link.url}
                text={link.text}
                key={link.url}
                current={link.url === "/about"}
              />
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <nav id="main-nav">
      <img
        src="../../images/icons/logo-light.png"
        alt="my portfolio"
        className="logo"
      />
      <ul>
        {linklist.map((link) => (
          <Navlink
            url={link.url}
            text={link.text}
            key={link.url}
            current={link.url === "/"}
          />
        ))}
        {isLoading && <div className="loading-small"></div>}
        {!isLoading && <LoginButton />}
        {!isLoading && <LogoutButton />}
      </ul>
    </nav>
  );
};

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  if (isAuthenticated) return null;
  return (
    <button className="btn btn-dark" onClick={() => loginWithPopup()}>
      login
    </button>
  );
};

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();
  if (!isAuthenticated) return null;
  return (
    <button
      className="btn btn-dark"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      logout
    </button>
  );
};

const Navlink = ({ url, text, current }) => {
  return (
    <>
      <li>
        <Link to={url} className={current ? "navlink current" : "navlink"}>
          {text}
        </Link>
      </li>
    </>
  );
};

export { Navbar };
