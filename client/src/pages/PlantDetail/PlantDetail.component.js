import React, { Component } from 'react';
import { Login } from '../../components/Login/Login.component'
import InfoCard from '../../components/InfoCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col } from 'reactstrap';
import CreateIcon from '@material-ui/icons/Create';
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
                    days: null,
                    lastWatered: ""
                },
                _id: "",
                userID: "",
                plantName: "",
                nonToxic: null,
                plantPic: "",
                createdAt: ""
            }
        }
        this.handleWater = this.handleWater.bind(this)
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

    handleWater(data) {
        var todaysDate = new Date();

        this.setState(this.state.userPlant.plantCare.lastWatered = todaysDate)
        console.log(this.state.userPlant.plantCare.lastWatered)
        API.updatePlant(this.props.match.params.id, this.state.userPlant)
    }

    handlePlantDelete = id => {
        API.deletePlant(id).then(res => this.getPlants()).then(window.location.href="/dashboard/") 
    };
    
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
                        <Col xs="10">
                            <WateringSchedule data = {this.state.userPlant.plantCare} />
                        </Col>
                        <Col xs="2">
                            <CreateIcon onClick={this.handleWater} />
                        </Col>

                    </Row>


                    {/* INFO CARD ROW --------------  */}
                    <Row id='info-card'>
                        <Col id="plant-col" sm="12" md={{ size: 8, offset: 2 }} >
                            <h5>Care Info:</h5>
                            <InfoCard 
                            key={this.state.userPlant._id}
                            sun = {this.state.userPlant.plantCare.sun}
                            soil = {this.state.userPlant.plantCare.soil}
                            water = {this.state.userPlant.plantCare.water}
                            days = {this.state.userPlant.plantCare.days}
                            weeks = {this.state.userPlant.plantCare.weeks}
                            onClick={event => this.handlePlantDelete(this.state.userPlant._id)}
                            label="Delete"
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
