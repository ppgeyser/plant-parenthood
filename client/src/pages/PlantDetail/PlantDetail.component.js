import React, { Component } from 'react';
import { Login } from '../../components/Login/Login.component'
import InfoCard from '../../components/InfoCard'
import BottomNav from '../../components/BottomNavigation'
import { Container, Row, Col } from 'reactstrap';

import WateringSchedule from '../../components/WateringSchedule'


class PlantDetail extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log('Plant Id', this.props.match.params.id);
    }
    
    render() {
        return (
            <div>
                <Container id="plantid-body">

                    {/* PLANT NAME - ROW  --------------  */}
                    <Row id="dashboard-text">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h3>Plant ID: {this.props.match.params.id}</h3>
                        </Col>
                    </Row>

                    {/* WATERING SCHEDULE ROW --------------  */}
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <WateringSchedule />
                        </Col>
                    </Row>


                    {/* INFO CARD ROW --------------  */}
                    <Row id='info-card'>
                        <Col sm="12" md={{ size: 8, offset: 2 }} >
                            <h5>Care Info:</h5>
                            <InfoCard sun='bright' />
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
