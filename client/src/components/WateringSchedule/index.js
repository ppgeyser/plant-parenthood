import React from "react";
var moment = require('moment');
 

function waterSchedule(arg) {
    console.log(arg)
    const date = new Date(); 

    // date the plant was added (assuming that is the day the plant is being watered)
     var plantAddedDate = date; // THIS NEEDS TO BE REPLACED WITH ACTUAL PLANT ADDED DATE
    // how often the plant needs to be watered 
     var wateringFreq = arg; // THIS NEEDS TO BE REPLACED WITH ACTAL WATER FREQ DATA FROM DB

     // find next watering date by adding plant-added-date with watering frequency 
     // ex: Plant added Oct 15 || Water-Freq is 7 days || Oct 15th + 7 days = October 22nd 
     var nextWateringDate = moment(plantAddedDate).add(wateringFreq, 'days');
        //console.log(nextWateringDate);
     
    // nextWateringDate - todaysDate = howmanydays?
    var date1 = new Date();
    var date2 = moment(nextWateringDate);
    var diffInDays = date2.diff(date1, 'days');
        console.log('diff: ' + diffInDays);
        return diffInDays;
}

let WateringSchedule = (props) => {    
console.log(props)
        return (
            <div>
                <h5> Water again in {waterSchedule(props.data.days)} days </h5>
            </div>
        );
    
}

export default WateringSchedule
