// React libraries
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { Search } from "./pages/Search";
import { Saved } from "./pages/Saved";

function App() {
  return (
    <>
      <Router basename="/">
        <Switch>
          <Route exact path="/"><Search /></Route>
          <Route exact path="/saved"><Saved /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
