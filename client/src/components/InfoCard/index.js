import React from 'react';
import { Button, Card, CardImg, CardText, CardBody } from 'reactstrap';
// const InfoCard = ({sun , soil, water, days, weeks}) => {
    const InfoCard = (props) => {
    return (
        <div>
            <Card>
            <CardBody>
                <p id="care-info-text"> Care Info: </p>
                    <ul>
                        <li>Sun: {props.sun}</li>
                        { props.soil && <li> Soil: {props.soil}</li> }
                        {/* { props.days &&  <li>Water every {props.days} days.</li> } */}
                        { props.water && <li> {props.water}</li> }
                    </ul>
                    <button className="float-right" onClick={props.onClick}>{props.label}</button>
                </CardBody>
            </Card>
        </div>
        );
      };
export default InfoCard;