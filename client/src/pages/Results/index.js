import React, { Component } from 'react';
import PlantDisplayCard from '../../components/PlantDisplayCard';
import Plants from "./Plants.json";
import API from "../../utils/API";
// import BottomNav from "../../components/BottomNavigation"

class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
        matchScore: [],
        bestMatch: []
    }
    }

    componentDidUpdate() {
        if (this.state.bestMatch.length <= 0){
            this.handleMatch();
        }
    }
    
    componentDidMount(){
        this.setState({ matchScore : [...localStorage.getItem('matchScore').split(',')] });
    }

    handleMatch = () => {
        let bestMatch = [];
        let nonToxic = [];
        let fiveMatch = [];
        let fourMatch = [];
        let threeMatch = [];
        let twoMatch = [];
        let oneMatch = [];
        // if user has pets
        if (this.state.matchScore[4] === '1'){
            nonToxic = Plants.filter(plant => plant.nonToxic === true);
            let match = 0;
            for (let i = 0; i < nonToxic.length; i++) {
                for (let j = 0; j < 4; j++)
                if (nonToxic[i].plantScore[j] === this.state.matchScore[j]){
                    match++;
                }
                switch (match) {
                    case 4:
                        fourMatch.push(nonToxic[i])
                        match = 0
                        break;
                    case 3:
                        threeMatch.push(nonToxic[i])
                        match = 0
                        break;
                    case 2:
                        twoMatch.push(nonToxic[i])
                        match = 0
                        break;
                    case 1:
                        oneMatch.push(nonToxic[i])
                        match = 0
                        break;    
                    default:
                        break;
                }
            }
            bestMatch.push(...fourMatch, ...threeMatch, ...twoMatch, ...oneMatch)
            bestMatch.length = 5;
            this.setState({bestMatch: bestMatch})
            // no pets
                } else {
                    let match = 0;
                    for (let i = 0; i < Plants.length; i++) {
                        for (let j = 0; j < 5; j++)
                        if (Plants[i].plantScore[j] === this.state.matchScore[j]){
                            match++;
                        }
                        switch (match) {
                            case 5:
                                fiveMatch.push(Plants[i])
                                match = 0
                                break;
                            case 4:
                                fourMatch.push(Plants[i])
                                match = 0
                                break;
                            case 3:
                                threeMatch.push(Plants[i])
                                match = 0
                                break;
                            case 2:
                                twoMatch.push(Plants[i])
                                match = 0
                                break;
                            case 1:
                                oneMatch.push(Plants[i])
                                match = 0
                                break;    
                            default:
                                break;
                        }
                    }
                    bestMatch.push(...fiveMatch, ...fourMatch, ...threeMatch, ...twoMatch, ...oneMatch)
                    bestMatch.length = 5;
                    this.setState({bestMatch: bestMatch})
                    // }
            }
        }

    savePlant = plant => {
        const userId = localStorage.getItem('userId')
        API.savePlant({
            userID: userId,
            plantName: plant.plantName,
            plantCare: {
                soil: plant.plantCare.soil,
                sun: plant.plantCare.sun,
                water: plant.plantCare.water,
                weeks: plant.plantCare.weeks,
                days: plant.plantCare.days,
            },
            nonToxic: plant.nonToxic,
            plantPic: plant.plantPic
        })
    }

    render() {
        return (
            <div>
                <h1>Your Results</h1>
                {this.state.bestMatch.map(plant =>
                <PlantDisplayCard 
                key={plant.plantId}
                plantPic = {plant.plantPic}
                plantName={plant.plantName}
                plantBio={plant.plantBio}
                sun={plant.plantCare.sun}
                soil={plant.plantCare.soil}
                water={plant.plantCare.water}
                onClick={() => this.savePlant(plant)}
                label="Add Plant"
                />)}
                {/* <BottomNav /> */}
            </div>
        )

    }
}

export default Results;