import React from 'react';
import {
  Card, CardImg, CardText, 
  CardBody, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./styles.css";
import { PinDropRounded } from '@material-ui/icons';


const PlantDisplayCard = (props) => {
  return (
    <div>
      <Card className="border-0">
            <div>
                <img onClick={props.onClick} src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />  
                <p style={{fontWeight: "bold"}} >{props.plantName} </p>
                <p>{props.children}</p>
                { props.plantNickname && <p> Nickname: {props.plantNickname}</p> }
                <p>Sun: {props.sun}</p>
                <p>Soil: {props.soil}</p>
                <p>Water: {props.water}</p>
                  <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
            </div>
      </Card>
    </div>
  );
};

export default PlantDisplayCard;