import React from "react";
import { Home } from "react-feather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Landing from './views/Landing';

// import Landing from "./views/Landing";
import "./App.css";
import TopNav from "./shared/component/TopNav_";
import Donations from "./views/Donate";
import HowToHelp from "./views/HowToHelp";
import Story from "./views/legacy/Story";

export const App: React.FC = () => {
  return (
    <Router>
      <TopNav />
      <div className="container w-screen h-screen">
        <Switch>
          <Route exact path="/">
            {/* <Landing /> */}
            <Home />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/champions">
            {/* <Champions /> */}
          </Route>
          <Route path="/donate">
            <Donations />
          </Route>
          <Route path="/how-to-help">
            <HowToHelp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
