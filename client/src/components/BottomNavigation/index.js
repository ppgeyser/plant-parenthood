// export { default } from "./Nav.component";

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/icons';
import { Container, Row, Col } from 'reactstrap';
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
      
      <Container>

        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }} >

            <BottomNavigation
              id="navbar-row"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }} >

              <HomeIcon className="navicon" href="../../Dashboard" />
              <AddBoxIcon className="navicon" href="../../AddPlant" />
              <ContactSupportIcon className="navicon" href="../../Survey" />
              <ExitToAppIcon className="navicon" onClick={() => logout()}/>

              {/* <div>
                {isAuthenticated && 
                <span className="text-center">
                  <button onClick={() => logout()}> {<ExitToAppIcon />} </button>
                </span>
                }
              </div> */}
            </BottomNavigation>
          </Col>
        </Row>

      </Container>
    );
  }
