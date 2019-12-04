import React from 'react';
import { Login } from '../../components/Login/Login.component';
import PlantDashCard from '../../components/PlantDashCard';
import BottomNav from '../../components/BottomNavigation';
import { Container, Row, Col, Alert } from 'reactstrap';
import API from "../../utils/API";
import { User } from '../../components/User';
import OpacityIcon from '@material-ui/icons/Opacity';
import WateringSchedule from '../../components/WateringSchedule';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            userPlants: [],
            index: null,
            user: {
                id: window.localStorage.userId
            }
        };
        this.handleWater = this.handleWater.bind(this)
    }

    componentDidMount() {
        this.loadPlants()
    }

    loadPlants() {
        API.getPlants(this.state.user.id)
            .then(res => {
                this.setState({
                    userPlants: res.data
                });
            })
    }

        // FUNCTION TO UPDATE LAST WATERED DATE -----------------------------
        handleWater(plant) {
            //console.log('handleWater', plant)
            // Make a request to the API to update the lastWatered to the current Time
            API.updatePlant(plant._id, {
                ...plant,
                plantCare: {
                    ...plant.plantCare,
                    lastWatered: new Date(),
                }
            })
            .then(res => {
                console.log('UPDATED PLANT', res);
                this.loadPlants();
                this.setVisible(true);


            })
            .catch(err => {
                console.log('ERR - Failed to update plant', err);
                // TODO - handle gracefully
            });

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

        navigateToPlant = (e, userPlant) => {
            e.preventDefault();
            this.props.history.push(`/plants/${userPlant._id}`);
        }


    render() {
        console.log('this.props', this.props);
        return (
            <div>  

                <Alert color="success" isOpen={this.state.isVisible} toggle={this.onDismiss} style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                    Plant Watered!
                </Alert>  

            <User />
            <Container id="container-body">

                {/* HEADER TEXT ROW  --------------  */}
                <Row id="header-text">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <h3> Your Plants </h3> 
                    </Col>
                </Row>

                {/* PLANT CARD ROW --------------  */}
                {/* {this.state.userPlants.map(userPlant =>( */}
                <div id="plant-row-top">
                    {this.state.userPlants.length === 0
                    ? <h2 id="ifNo">You have no plants yet! Take our survey to see what plant you can parent, or add your own!</h2>
                    : this.state.userPlants.map((userPlant, index) => (

                            <div id="plant-dash-lg">
                                <PlantDashCard
                                    key={userPlant._id}
                                    plantPic={userPlant.plantPic}
                                    plantName={userPlant.plantName}
                                    plantNickname={userPlant.plantNickname}
                                    water={userPlant.plantCare.days}
                                    onClick={e => this.navigateToPlant(e, userPlant)}
                                    label="Details"
                                >
                                    <OpacityIcon id="water-icon" onClick={e => this.handleWater(userPlant)} />
                                    <WateringSchedule  data = {userPlant.plantCare} />
                                </PlantDashCard>
                                <hr id="plant-hr"/>
                            </div>
                        
                    ))}     
                </div>
                
                <Login />
            
            </Container>
            
            <BottomNav />

            </div>
        )
    }
}

export default Dashboard;