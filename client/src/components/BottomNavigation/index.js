// export { default } from "./Nav.component";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';



const useStyles = makeStyles({
    root: {
      background: "darkolivegreen",
      height: "8%",
      width: "100%",
      position: "fixed",
      bottom: 0,
      marginTop: "10%",
    },
  });


export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        // showLabels
        className={classes.root}
      >
        <BottomNavigationAction className="links" href="../../Dashboard" label="Dashboard" icon={<HomeIcon />} />
        <BottomNavigationAction href="../../AddPlant" label="Add Plant" icon={<AddBoxIcon />} />
        <BottomNavigationAction href="../../Survey" label="Survey" icon={<ContactSupportIcon />} />

      </BottomNavigation>
    );
  }
