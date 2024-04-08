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
          <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/pod" component={Pod} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
