import React from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div>
        <h1>Hello, World. My name is Dan and I like web development!</h1>
        <Home />
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
