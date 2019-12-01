import React from 'react';
import { Button } from 'reactstrap';

// const InfoCard = ({sun , soil, water, days, weeks}) => {
    const InfoCard = (props) => {
    return (
        <div>
            <ul>
                <li>Sun: {props.sun}</li>
                <li>Soil: {props.soil}</li>
                { props.days &&  <li>Water every {props.days} days.</li> }
                { props.weeks &&  <li>Water every {props.weeks} weeks.</li> }
                <li>Water Care: {props.water}</li>

            </ul>
            <Button className="float-right" onClick={props.onClick}>{props.label}</Button>
        </div>
        );
      };


export default InfoCard;