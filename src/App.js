import React from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
