import React, { Component } from 'react';
import { Login } from '../../components/Login/Login.component'
import InfoCard from '../../components/InfoCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import './style.css';
import WateringSchedule from '../../components/WateringSchedule'


class PlantDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            userPlant: {
                plantCare: {
                    soil: "",
                    sun: "",
                    water: "",
                    weeks: null,
                    days: null
                },
                _id: "",
                userID: "",
                plantName: "",
                nonToxic: null,
                plantPic: "",
                createdAt: ""
            }
        }
    }
    
    componentDidMount(){
        this.loadUserPlant();
    };

    loadUserPlant(){
        API.getPlantByID(this.props.match.params.id).then(res => {
            this.setState({
                userPlant: res.data
            });
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <Container id="plantid-body">

                    {/* PLANT NAME - ROW  --------------  */}
                    <Row id="header-text">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h3>{this.state.userPlant.plantName}</h3>
                        </Col>
                    </Row>

                    {/* IMAGE ROW --------------  */}
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <img src={this.state.userPlant.plantPic} alt="Plant Picture" />
                        </Col>
                    </Row>

                    {/* WATERING SCHEDULE ROW --------------  */}
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <WateringSchedule data = {this.state.userPlant.plantCare} />
                        </Col>
                    </Row>


                    {/* INFO CARD ROW --------------  */}
                    <Row id='info-card'>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <h5>Care Info:</h5>
                            <InfoCard 
                            sun = {this.state.userPlant.plantCare.sun}
                            soil = {this.state.userPlant.plantCare.soil}
                            water = {this.state.userPlant.plantCare.water}
                            />
                        </Col>
                    </Row>

                    <Login />

                </Container>

                    <BottomNav />

            </div>
        );
    }
}

export default PlantDetail;
