import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pod from "./components/Pod";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Hero />
          <Pod />
        </main>
      </div>
    </Router>
  );
};

export default App;
