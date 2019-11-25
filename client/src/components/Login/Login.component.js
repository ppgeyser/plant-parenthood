import React from "react";
import { Button } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./styles.css";

export const Login = (props) => {
  const { isAuthenticated, loginWithRedirect} = useAuth0();

  return (
    <div className="text-center">
      {!isAuthenticated && (
        <Button id="login-button"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Button>
      )}

    </div>
  );
};