// export { default } from "./Nav.component";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Login } from '../Login/Login.component';



// const useStyles = makeStyles({
//     root: {
//       background: "darkolivegreen",
//       height: "8%",
//       width: "100%",
//       position: "fixed",
//       bottom: 0,
//       marginTop: "10%",
//     },
//   });


export default function BottomNav() {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        id="navbar-row"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // showLabels
        //className={classes.root}
      >
        <BottomNavigationAction className="links" href="../../Dashboard" icon={<HomeIcon />} />
        <BottomNavigationAction href="../../AddPlant" icon={<AddBoxIcon />} />
        <BottomNavigationAction href="../../Survey" icon={<ContactSupportIcon />} />
        <Login />

      </BottomNavigation>
    );
  }
