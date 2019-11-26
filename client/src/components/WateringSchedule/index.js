import React from "react";
import Moment from 'react-moment';
 

export default class WateringSchedule extends React.Component {

    // retrieve "days" for watering from MongoDb 
    // ---- 'n' variable goes here ---- 

    render() {
        // retrieve todays date
        const date = new Date(); //Current Date
 
        return (
            <div>
                {/* Add 'n' variable to todays date to get next watering date  */}
                <h5> Water again on: </h5>
                <Moment format="MM/DD" add={{ days: 1 }}>{date}</Moment>
            </div>
        );
    }
}