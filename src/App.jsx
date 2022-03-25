//NPM packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Projects files

import Navbar from "./componenets/Navbar";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Footer from "./componenets/Footer";
import LanguageContextProvider from "./state/LanguageContext";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<Track />} />
          </Routes>
          <Footer />
        </Router>
      </LanguageContextProvider>
    </div>
  );
}
