import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <div className="fixed w-full z-1 flex justify-center">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
