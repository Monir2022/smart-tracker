//NPM packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Projects files
import React  from 'react';
import Navbar from "./componenets/Navbar";
import Home from "./pages/Home"
import Track from "./pages/Track";
import Footer from "./componenets/Footer";
//import LanguageContextProvider from "./contexts/LanguageContext";
import LanContextProvider from "./contexts/LanContext";
import "./styles/style.css"


export default function App() {
  return (
    <div className="App">
      <LanContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
        </Routes>
        <Footer />
      </Router>
      </LanContextProvider>
    </div>
  );
}
