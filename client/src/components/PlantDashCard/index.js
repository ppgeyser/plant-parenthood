import React from 'react';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';
import OpacityIcon from '@material-ui/icons/Opacity';




const PlantDashCard = (props) => {
  return (
    <div>        
      <Card className="border-0">
            <CardBody >
                <CardImg onClick={props.onClick} src={props.plantPic} className="float-left mr-3 plant-img" alt="Plant Image" />  
                <CardText style={{fontWeight: "bold"}} >{props.plantName}
                    <OpacityIcon />
                </CardText>
                <CardText>{props.children}</CardText>
                { props.plantNickname && <CardText> Nickname: {props.plantNickname}</CardText> }
                <CardText>Water every {props.water} days </CardText>
                  {/* <Button className="float-right" onClick={props.onClick}>{props.label}</Button> */}
            </CardBody>
      </Card>
    </div>
  );
};

export default PlantDashCard;