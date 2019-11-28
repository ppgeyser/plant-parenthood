import React from 'react';

const InfoCard = ({sun , soil, water}) => {
    return (
        <div>
            <ul>
                <li>{sun}</li>
                <li>{soil}</li>
                <li>{water}</li>
            </ul>
        </div>
        );
      };


export default InfoCard;