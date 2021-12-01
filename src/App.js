import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "devicon/devicon.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/DemelNovoPortfolio" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;
