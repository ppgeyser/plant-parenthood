import React from "react";
import { Button } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="text-center">
      {!isAuthenticated && (
        <Button color="primary"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Button>
      )}
      
      {isAuthenticated && (
        <span className="text-center">
            <Button color="warning" onClick={() => logout()}>Log out</Button>
            <Link to="/profile"><Button>View Profile</Button></Link>
        </span>
        )}
    </div>
  );
};