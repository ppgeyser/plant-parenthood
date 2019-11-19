import React from 'react';
import { Login } from '../../components/Login';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Landing = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to Plant Parenthood </h1>
                    <p>
                    We offer a survey for you to find , watering management and more!
                    </p>
                    <img className="banner-img" alt="plant_img" src= '../banner.jpg' />
                </Container>
            </Jumbotron>

            <Login />
        </div>
    )
}

