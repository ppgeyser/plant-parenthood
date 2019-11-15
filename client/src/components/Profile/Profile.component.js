import React from "react";
import { Button } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { User } from '../../components/User'

export const Profile = (props) => { 
  const { logout, loading, user, key} = useAuth0();

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

      {/* This bit below will not be displayed in release */}
      
      <br></br>
      <User />
      <br></br>
      </div>
  );
};
