import React, { Component } from 'react';


class PlantDetail extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log('Plant Id', this.props.match.params.id);
    }
    
    render() {
        return (
            <div>
                <h1>Plant ID: {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default PlantDetail;
