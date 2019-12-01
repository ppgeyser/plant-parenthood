import React from 'react';

const InfoCard = ({sun , soil, water, weeks}) => {
    return (
        <div>
            <ul>
                <li>Sun: {sun}</li>
                <li>Soil: {soil}</li>
                { water &&  <li>Water every {water} days.</li> }
                { weeks &&  <li>Water every {weeks} weeks.</li> }
            </ul>
        </div>
        );
      };


export default InfoCard;