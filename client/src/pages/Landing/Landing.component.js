import React from 'react';
import { Login } from '../../components/Login';

import { Container, Row, Col } from 'reactstrap';

export const Landing = (props) => {
    return (

        <Container id="landing-page-body" style={{ backgroundImage: `url(../banner5.jpg)`, backgroundSize: 'cover' }}>

            {/* WELCOME TEXT ROW  --------------  */}
            <Row id="landing-welcome-text">
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <h3> Welcome to </h3> 
                    <h2> Plant Parenthood </h2>
                </Col>
            </Row>

            {/* LOGIN BUTTON ROW --------------  */}
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                    <Login />
                </Col>
            </Row>

        </Container>
    )
}

