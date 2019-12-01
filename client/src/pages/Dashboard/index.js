import React from 'react';
import { Login } from '../../components/Login/Login.component';
import PlantDashCard from '../../components/PlantDashCard';
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
        if (this.state.userPlants.length === 0) {
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
            <Container id="container-body">

                {/* HEADER TEXT ROW  --------------  */}
                <Row id="header-text">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> Your Plants </h3> 
                    </Col>
                </Row>

                {/* PLANT CARD ROW --------------  */}
                {/* {this.state.userPlants.map(userPlant =>( */}
                
                {this.state.userPlants.length === 0
                ? <h1 id="ifNo">You have no plants yet! Take our survey to see what plant you can parent, or add your own!</h1>
                : this.state.userPlants.map(userPlant =>(

                    <Row id="plant-row">
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <PlantDashCard 
                                key={userPlant._id}
                                plantPic={userPlant.plantPic}
                                plantName={userPlant.plantName}
                                plantNickname={userPlant.plantNickname}
                                water={userPlant.plantCare.days}
                                onClick={event =>  window.location.href="/plants/" + userPlant._id}
                                label="Details"
                            />
                            
                        </Col>

                        <Row>
                            <Col sm="12" md={{ size: 8, offset: 2 }} >
                            {/* <Button className="float-right" onClick={props.onClick}>{props.label}</Button> */}
                            </ Col>
                        </Row>
                    </Row>
                ))}
                
                <Login />
            
            </Container>
            
            <BottomNav />

            </div>
        )
    }
}

export default Dashboard;