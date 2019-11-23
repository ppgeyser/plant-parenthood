import React from 'react';
import {
  Card, CardImg, CardText, 
  CardBody, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";

const PlantDisplayCard = (props) => {
  return (
    <div>
      <Card>
            <CardBody>
                <CardText>
                    {/* when ready to populate with real data, change src below to be props.image*/}
                    <CardImg src='../banner5.jpg' className="float-left mr-3 plant-img" alt="Plant Image" />  
                    {props.children}
                    <div id="plant-info">
                      <p>Plant Name </p>
                      <p> Plant Common Name</p>
                      <p> Watering: 2 days</p>
                    </div>
                    </CardText>
                <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
            </CardBody>
      </Card>
    </div>
  );
};

export default PlantDisplayCard;