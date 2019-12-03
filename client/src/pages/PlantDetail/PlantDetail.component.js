import React, { Component } from 'react';
import { Login } from '../../components/Login/Login.component'
import InfoCard from '../../components/InfoCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col, Alert, Card, CardImg, CardText, CardBody } from 'reactstrap';
import CreateIcon from '@material-ui/icons/Create';
import API from "../../utils/API";
import './style.css';
import WateringSchedule from '../../components/WateringSchedule'
import OpacityIcon from '@material-ui/icons/Opacity';
class PlantDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible: false,
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
                plantNickname: "",
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
    // FUNCTION TO UPDATE LAST WATERED DATE -----------------------------
    handleWater(data) {
        var todaysDate = new Date();
    
        this.setState(this.state.userPlant.plantCare.lastWatered = todaysDate)
            //console.log(this.state.userPlant.plantCare.lastWatered)
        // Send NEW last watered date to user's database 
        API.updatePlant(this.props.match.params.id, this.state.userPlant)
        
        // set alert to visible
        this.setVisible(true);
    }
    // ALERT FUNCTIONALITY --------------------------------------------
    setVisible = (boolean) => {
        this.setState({
            isVisible: boolean
        });
    };
    
      onDismiss = () => {
        this.setVisible(false);
    }
    // REMVOVING A PLANT --------------------------------------------
    handlePlantDelete = id => {
        API.deletePlant(id).then(res => this.getPlants()).then(window.location.href="/dashboard/") 
    };
    
    render() {
        console.log(this.state)
        return (
            <div>
                {/* Alert on successful plant add*/}
                <Alert color="success" isOpen={this.state.isVisible} toggle={this.onDismiss} style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                    Plant Watered!
                </Alert>    
                <Container id="plantid-body">
                    {/* PLANT NAME - ROW  --------------  */}
                    <Row id="header-text">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h3>{this.state.userPlant.plantNickname || this.state.userPlant.plantName}</h3>
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
                    <Card id="water-card">
                        <CardBody>
                            <Row>
                                <Col xs="10">
                                    <WateringSchedule data = {this.state.userPlant.plantCare} />
                                </Col>
                                <Col xs="2">
                                    <OpacityIcon id="water-icon" onClick={this.handleWater} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    </Col>
                    </Row>
                    {/* INFO CARD ROW --------------  */}
                    <Row id='info-card'>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            {/* <h5>Care Info:</h5> */}
                            <InfoCard 
                            key={this.state.userPlant._id}
                            sun = {this.state.userPlant.plantCare.sun}
                            soil = {this.state.userPlant.plantCare.soil}
                            water = {this.state.userPlant.plantCare.water}
                            days = {this.state.userPlant.plantCare.days}
                            weeks = {this.state.userPlant.plantCare.weeks}
                            onClick={event => this.handlePlantDelete(this.state.userPlant._id)}
                            label="Remove"
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
