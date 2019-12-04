import React from 'react';
import { Card, Button, Row, Col } from 'reactstrap';
import "./styles.css";
import { PinDropRounded } from '@material-ui/icons';


const PlantDisplayCard = (props) => {
  return (
    <div>
      <Card className="border-0">

            <div>

            {/* PLANT TITLE ROW  */}
            <Row>
              <Col sm="12" md={{ size: 8, offset: 0 }} lg={{ size: 8, offset: 0 }}>
                <p style={{fontWeight: "bold"}} >{props.plantName} </p>
              </Col>
            </Row>

            {/* IMAGE + SUMMARY ROW  */}
            <Row>
              {/* IMAGE COLUMN  */}
              <Col sm="4" md={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }}>
                <img onClick={props.onClick} src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />
              </Col>
              {/* TEXT COLUMN  */}
              <Col sm="6" md={{ size: 8, offset: 2 }} lg={{ size: 7, offset: 2 }}>
                <p>{props.children}</p>
                  { props.plantNickname && <p> Nickname: {props.plantNickname}</p> }
                  <p>Sun: {props.sun}</p>
                  <p>Soil: {props.soil}</p>
                  <p>Water: {props.water}</p>
              </Col>
            </Row>
                  <button className="float-right rounded" onClick={props.onClick}>{props.label}</button>
            </div>

      </Card>
    </div>
  );
};

export default PlantDisplayCard;