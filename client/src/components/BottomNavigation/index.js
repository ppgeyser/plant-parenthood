// export { default } from "./Nav.component";

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth0 } from "../../react-auth0-spa";

export default function BottomNav() {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { isAuthenticated, logout } = useAuth0();

  
    return (

      <BottomNavigation
        id="navbar-row"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
  
        //className={classes.root}
      >
        <BottomNavigationAction className="links" href="../../Dashboard" icon={<HomeIcon />} />
        <BottomNavigationAction href="../../AddPlant" icon={<AddBoxIcon />} />
        <BottomNavigationAction href="../../Survey" icon={<ContactSupportIcon />} />
        <div>
          {isAuthenticated && 
          <span className="text-center">
            <button onClick={() => logout()}> {<ExitToAppIcon />} </button>
          </span>
          }
        </div>

      </BottomNavigation>
    );
  }
