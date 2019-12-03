import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation'; 
import { Container, Row, Col } from 'reactstrap';
import { Home, AddBox, ContactSupport, ExitToApp, ViewModule, Link } from '@material-ui/icons/';
import { useAuth0 } from "../../react-auth0-spa";
import { BottomNavigationAction } from '@material-ui/core';

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
              }} 
              hideLabels
              >
              <BottomNavigationAction href="/dashboard" icon={<Home />} />
              <BottomNavigationAction href="/feed" icon={<ViewModule />} />
              <BottomNavigationAction href="/addplant" icon={<AddBox />} />
              <BottomNavigationAction href="/survey" icon={<ContactSupport />} />
              <BottomNavigationAction icon={<ExitToApp className="navicon" onClick={() => logout()}/>}/>
              {/* <Home className="navicon" onClick={() => window.location = "/dashboard"}/>
              <ViewModule className="navicon" onClick={() => window.location = "/feed"}/>
              <AddBox className="navicon" onClick={() => window.location = "/addplant"}/>
              <ContactSupport className="navicon" onClick={() => window.location = "/survey"}/>
              <ExitToApp className="navicon" onClick={() => logout()}/> */}

            </BottomNavigation>
          </Col>
        </Row>

      </Container>
    );
  }
