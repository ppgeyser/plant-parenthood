import React from 'react';
import {
  Card, CardImg, CardText, 
  CardBody, Button
} from 'reactstrap';
import "./styles.css";

const PlantDisplayCard = (props) => {
  return (
    <div>
      <Card>
            <CardBody>
                <CardText>
                    <CardImg src={props.image} className="float-left mr-3 plant-img" alt="Plant Image" />  
                    {props.children}
                    </CardText>
                <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
            </CardBody>
      </Card>
    </div>
  );
};

export default PlantDisplayCard;