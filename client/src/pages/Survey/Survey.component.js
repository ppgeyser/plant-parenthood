import React, { Component } from 'react';

export class Survey extends Component {
    constructor(props){
        super(props);
        this.state = {
            allPlants: {
                type: "Pothos",
                color: "green",
            },
            surveyQuestions: {},
        };
    }
    
    componentDidMount(){

    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Survey page</h1>
            </div>
        );
    }
}
