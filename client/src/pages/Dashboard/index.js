import React from 'react';
import { Login } from '../../components/Login/Login.component';
import PlantDisplayCard from '../../components/PlantDisplayCard';
import BottomNav from '../../components/BottomNavigation';
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import { User } from '../../components/User';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPlants: [],
        };
    }

    componentDidUpdate() {
        if (this.state.userPlants.length == 0) {
            this.loadPlants();
        }
    }

    loadPlants() {
        const userId = localStorage.getItem('userId') 
        API.getPlants(userId)
            .then(res => {
                this.setState({
                    userPlants: res.data
                });
            })
    }

    render() {
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

                {this.state.userPlants.map(userPlant =>(
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <PlantDisplayCard 
                                key={userPlant._id}
                                plantPic={userPlant.plantPic}
                                plantName={userPlant.plantName}
                                sun={userPlant.plantCare.sun}
                                soil={userPlant.plantCare.soil}
                                water={userPlant.plantCare.days}
                                onClick={event =>  window.location.href="/plants/" + userPlant._id}
                                label="Details"
                            />
                        </Col>
                    </Row>
                ))}
                

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