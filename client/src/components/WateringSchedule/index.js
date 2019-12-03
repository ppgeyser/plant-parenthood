import React from "react";
var moment = require('moment');
 

function waterSchedule(arg) {

    // date the plant was added (assuming that is the day the plant is being watered)
     const plantLastWatered = arg.lastWatered;
    // const plantLastWatered = "2019-11-27T23:19:57.286Z"
    // console.log(plantLastWatered);

    // how often the plant needs to be watered 
     var wateringFreq = arg.days; 

     // find next watering date by adding plant-added-date with watering frequency 
     // ex: Plant added Oct 15 || Water-Freq is 7 days || Oct 15th + 7 days = October 22nd 
     var nextWateringDate = moment(plantLastWatered).add(wateringFreq, 'days');
        //console.log(nextWateringDate);
     
    // nextWateringDate - todaysDate = howmanydays?
    var date1 = new Date();
    var date2 = moment(nextWateringDate);
    var diffInDays = date2.diff(date1, 'days');
        //console.log(typeof(diffInDays));
        return ( (diffInDays > 0) ? ( (diffInDays === 1) ? (<h5> Water tomorrow </h5>) : (<h5> Water again in {diffInDays} days </h5>) ) 
            : (<h5> Watering overdue. Water today!</h5>)
        )
}

let WateringSchedule = (props) => {    
//console.log(props)
        return (
            <div>
                {waterSchedule(props.data)} 
            </div>
        );
    
}

export default WateringSchedule
