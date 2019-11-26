import React, { useState, useEffect } from 'react';
import { Login } from '../../components/Login/Login.component'
import PlantDisplayCard from '../../components/PlantDisplayCard'
import BottomNav from '../../components/BottomNavigation'
import { User } from '../../components/User'
import { Container, Row, Col } from 'reactstrap';
import { useAuth0 } from "../../react-auth0-spa";
import { API } from "../../utils/API";

const Dashboard = props => {
    console.log('props', props);
    const storedUserId = window.localStorage.getItem('user');
    const [userId, updateUserId] = useState(storedUserId);
    const { key } = useAuth0();

    useEffect(() => {
        const fetchPlants = async (userId) => {
            try {
                updateUserId(userId)
                return await API.fetchUserPlantsByUserId(userId);
            } catch(err) {
                console.error("ERR - I don't get it", err);
                return [];
            }
        };
        const plants = fetchPlants(key);

        console.log('plants', plants)
    });
    
    

    console.log('userId', key);


    return (
        <div>
        <User />
        <Container id="dashboard-body">

            {/* USER'S NAME - ROW  --------------  */}
            <Row id="dashboard-text">
                <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h3> {userId}'s Plants </h3> 
                </Col>
            </Row>

            {/* PLANT CARD ROW --------------  */}
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                    <PlantDisplayCard />
                </Col>
            </Row>

            <Login />

            {/* NAVIGATION BAR --------------  */}
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }} >
                </Col>
            </Row>

        
        </Container>
        
        <BottomNav />
        </div>
    );
}

export default Dashboard;