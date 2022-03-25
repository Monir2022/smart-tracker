//NPM Packages
import { useContext } from "react";
import { Link } from "react-router-dom";

//Project file
import logo from "../assets/images/logo.png";
import { LanguageContext } from "../state/LanguageContext";
import Language from "./Language";

export default function Navbar() {
  const { language } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img className="logo-img" src={logo} alt="logo thumbnail" />
      </Link>
      <Link className="links" to="/">
        {language.Home}
      </Link>
      <Link className="links" to="/track">
        {language.Track}
      </Link>
      <Language />
    </nav>
  );
}
