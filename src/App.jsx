//NPM packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Projects files
import Navbar from "./componenets/Navbar";
import Homepage from "./pages/Homepage"
import TrackingPage from "./pages/TrackingPage";
import Footer from "./componenets/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/track" element={<TrackingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
