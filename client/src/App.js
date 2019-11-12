import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./components/Login";
import { About } from "./components/About";
import { noMatch } from "./components/noMatch/";
import { Profile } from "./components/Profile";
import { Survey } from "./pages/Survey/Survey.component";
import { Plants } from "./pages/Plants/Plants.component";
import { PlantDetail } from "./pages/PlantDetail/PlantDetail.component";
// import { NavBar } from "./components/NavBar";
import { PagePlaceholder } from './pages/PagePlaceholder/PagePlaceholder.component';

function App() {
  return (
    <Router>
      <header>
        {/* <NavBar /> */}
      </header>
      <Switch>
        <Route exact path="/">
          <About />
          <Login />  
        </Route>
        <PrivateRoute exact path="/dashboard" component={Profile} />
        <PrivateRoute exact path="/survey" component={Survey} />
        <PrivateRoute exact path="/plants" component={Plants} />
        <PrivateRoute exact path="/plants/:id" component={PlantDetail} />
        <Route component={noMatch} />
      </Switch>
    </Router>
  );
}

export default App;
