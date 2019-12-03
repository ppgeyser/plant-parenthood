import React from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col, Container, Button } from 'reactstrap';
import OpacityIcon from '@material-ui/icons/Opacity';




const PlantDashCard = (props) => {
  return (
    <div>   
      <Container>     
        <Card className="border-0">
              <CardBody>

                  {/* PLANT TITLE ROW  */}
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                      <CardText id="plant-dash-header-text" style={{fontWeight: "bold"}} >{props.plantName} </CardText>
                      { props.plantNickname && <CardText> Nickname: {props.plantNickname}</CardText> }
                    </Col>
                  </Row>
                    
                  {/* IMG / WATER / DROP - ROW */}
                  <Row>

                    {/* COL 1 - IMAGE COLUMN */}
                    <Col xs="4">
                      <CardImg onClick={props.onClick} src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />
                    </Col>

                    {/* COL 2 - WATER */}
                    <Col xs="8">
                      <Row>
                        {/* <CardText>Water every {props.water} days </CardText>   */}
                      </Row>
                      <Row>
                        {props.children}
                      </Row>
                    </Col>

                  </Row>

              </CardBody>

          </Card>

        </Container>
      </div>
  );
};

export default PlantDashCard;