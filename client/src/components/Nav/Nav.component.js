import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

import { BottomNavigation }  from '@material-ui/core';

import "./Nav.css";

const Nav = props => {
    return(
        <div>
        {/* <AppBar position="fixed" {...props}>
            <Toolbar>
                <Typography variant="headline" color="inherit" align="center">
                put links to pages here
                </Typography>
            </Toolbar>
        </AppBar> */}
        <BottomNavigation position="fixed" {...props}> Herro</BottomNavigation>

        
        </div>
    )
}
export default Nav;