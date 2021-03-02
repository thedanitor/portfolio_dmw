import React, { useState, useEffect } from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Loading from "./pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <NavMenu />
          <Home />
          <About />
          <Projects />
          <Skills />
        </div>
      ) : (
        <div className="App">
          <Loading />
        </div>
      )}
    </>
  );
}

export default App;
