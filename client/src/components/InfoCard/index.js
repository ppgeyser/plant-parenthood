import React from 'react';
import { Button, Card, CardImg, CardText, CardBody } from 'reactstrap';

// const InfoCard = ({sun , soil, water, days, weeks}) => {
    const InfoCard = (props) => {
    return (
        <div>
            <Card>
            <CardBody>
                <CardText>Care Info:</CardText>
                    <ul>
                        <li>Sun: {props.sun}</li>
                        <li>Soil: {props.soil}</li>
                        {/* { props.days &&  <li>Water every {props.days} days.</li> } */}
                        { props.water && <li>{props.water}</li> }

                    </ul>
                    <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
                </CardBody>
            </Card>
        </div>
        );
      };


export default InfoCard;
