import React, { useContext }  from 'react';
import { LanContext } from "../contexts/LanContext";
import { Link } from "react-router-dom";
//Project file
import logo from "../assets/images/logo.png";

import Language from './Language';

export default function Navbar() {
  const {lan} = useContext(LanContext);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        <img className="logo-img" src={logo} alt="logo thumbnail" />
      </Link>
      <Link to="/">{lan.Home}</Link>
      <Link to="/track">{lan.Track}</Link>
      <Language />
    </nav>
  );
}