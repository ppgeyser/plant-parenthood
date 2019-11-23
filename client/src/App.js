import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import { noMatch } from "./components/noMatch/";
import {Landing } from "./pages/Landing"
import { Survey } from "./pages/Survey/Survey.component";
import { Plants } from "./pages/Plants/Plants.component";
import  AddPlant  from "./pages/AddPlant/";
import Results  from "./pages/Results";
import PlantDetail from "./pages/PlantDetail/PlantDetail.component";
import  Dashboard  from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <header>
        {/* <NavBar /> */}
      </header>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/survey" component={Survey} />
        <PrivateRoute exact path="/plants" component={Plants} />
        <PrivateRoute exact path="/addPlant" component={AddPlant} />
        <PrivateRoute exact path="/results" component={Results} />
        <PrivateRoute exact path="/plants/:id" component={PlantDetail} />
        <Route component={noMatch} />
      </Switch>
    </Router>
  );
}

export default App;
