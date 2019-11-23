import React, { Component } from 'react';
import PlantDisplayCard from '../../components/PlantDisplayCard';

class Results extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>Your Results</h1>
            <PlantDisplayCard />
        )
    }
}

export default Results;