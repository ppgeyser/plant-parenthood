import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from "./components/About"
import { noMatch } from "./components/noMatch/"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
      <Switch>
        <Route component={noMatch} />
      </Switch>
    </Router>
  );
}

export default App;
