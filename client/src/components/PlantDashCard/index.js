import React from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col, Container, Button } from 'reactstrap';
import OpacityIcon from '@material-ui/icons/Opacity';
import { fontSize } from '@material-ui/system';




const PlantDashCard = (props) => {
  return (

      <Container>     
        
                  {/* PLANT TITLE ROW  */}
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                      <h5 id="plant-dash-header-text" style={{fontWeight: "bold"}}>{props.plantName} </h5>
                    </Col>
                  </Row>
                  
                  {/* NICKNAME ROW  */}
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                      { props.plantNickname && <h5> Nickname: {props.plantNickname}</h5> }
                    </Col>
                  </Row>
                    
                  {/* IMG / WATER / DROP - ROW */}
                  <Row id="water-img-row">

                    {/* COL 1 - IMAGE COLUMN */}
                    <Col xs="4" md={{ size: 8, offset: 2 }} lg={{ size: 5, offset: 2 }}>
                      <img onClick={props.onClick} src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />
                    </Col>

                    {/* COL 2 - WATER */}
                    <Col  xs={{ size: 5, offset: 2 }} md={{ size: 8, offset: 5 }} lg={{ size: 3, offset: 0 }}>
                      <Row>
                        {props.children}
                      </Row>
                    </Col>

                  </Row>

        </Container>
  );
};

export default PlantDashCard;