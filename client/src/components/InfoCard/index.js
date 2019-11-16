import React from 'react';

const InfoCard = ({sun , soil, water, temp}) => {
    return (
        <div>
            <ul>
                <li>{sun}</li>
                <li>{soil}</li>
                <li>{water}</li>
                <li>{temp}</li>
            </ul>
        </div>
        );
      };


export default InfoCard;