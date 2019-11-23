import React, { Component } from 'react';
import PlantDisplayCard from '../../components/PlantDisplayCard';

class Results extends Component {
    constructor(props){
        super(props);
        this.state = {
        matchScore: []
    }
    }
    componentDidUpdate(){
        console.log("this is state: ", this.state.matchScore)
    }
    
    componentDidMount(){
        this.setState({ matchScore : [...localStorage.getItem('matchScore').split(',')] });
    }

    render() {
        return (
            <div>
            <h1>Your Results</h1>
            <PlantDisplayCard />
            </div>
        )

    }
}

export default Results;