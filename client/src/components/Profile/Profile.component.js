import React from "react";
import { Button } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";

export const Profile = (props) => {
  const { logout, loading, user} = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
      <div className="text-center">
      <h1>Placeholder Profile Page</h1>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
        <span className="text-center">
            <Button color="warning" onClick={() => logout()}>Log out</Button>
            <Link to="/"><Button>Home</Button></Link>&nbsp;
        </span>

      {/* we obviously don't need this bit below but I included it to show what we are requesting from what Auth0 calls the Scope */}
      
      <h2>JSON below of your information!</h2>
      <br></br>
      <code>{JSON.stringify(user, null, 2,)}</code>
      </div>
  );
};
