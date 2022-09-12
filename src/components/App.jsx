import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Sections/Home";
import Contact from "./Sections/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
