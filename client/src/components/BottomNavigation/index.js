import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import { Container, Row, Col } from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth0 } from "../../react-auth0-spa";

export default function BottomNav() {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { logout } = useAuth0();
  
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

              <HomeIcon className="navicon" onClick={() => window.location = "/dashboard"}/>
              <AddBoxIcon className="navicon" onClick={() => window.location = "/addplant"}/>
              <ContactSupportIcon className="navicon" onClick={() => window.location = "/survey"}/>
              <ExitToAppIcon className="navicon" onClick={() => logout()}/>

            </BottomNavigation>
          </Col>
        </Row>

      </Container>
    );
  }
