// React libraries
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Material UI libraries
import { Container, Box } from '@material-ui/core';

// Components
import { Nav, Title } from "./components";
import { Search } from "./pages/Search";
import { Saved } from "./pages/Saved";

function App() {
  return (
    <>
      <Router basename="/">
        <Switch>
          <Route exact path={["/", "/search"]}><Search /></Route>
          <Route exact path="/saved"><Saved /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
