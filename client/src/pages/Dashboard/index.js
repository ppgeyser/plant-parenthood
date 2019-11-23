import React from 'react';
import { Login } from '../../components/Login/Login.component'
import PlantDisplayCard from '../../components/PlantDisplayCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userPlants: {},
        };
    }

    render() {
        console.log(this.state.allPlants)

        return (
    
            <Container id="dashboard-body">

                {/* USER'S NAME - ROW  --------------  */}
                <Row id="dashboard-text">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> [Name]'s Plants </h3> 
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
                <Row id="navbar-row">
                    <Col sm="12" md={{ size: 8, offset: 2 }} >
                        <BottomNav />
                    </Col>
                </Row>

            
            </Container>
            
        )
    }
}

export default Dashboard;