import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
// import config from "./auth_config.json";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// A function that routes the user to their home page
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname || "http://localhost:3000/profile"
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_domain}
    client_id={process.env.REACT_APP_clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();