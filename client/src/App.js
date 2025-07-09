import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/Footer";

// Import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import ContactUs from "./pages/contactus/contactUs";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;