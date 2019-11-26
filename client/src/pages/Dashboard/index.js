import React from 'react';
import { Login } from '../../components/Login/Login.component'
import PlantDisplayCard from '../../components/PlantDisplayCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col } from 'reactstrap';
import { User } from '../../components/User';

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
            <div>
            <User />
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
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} >
                    </Col>
                </Row>

            
            </Container>
            
            <BottomNav />
            </div>
        )
    }
}

export default Dashboard;