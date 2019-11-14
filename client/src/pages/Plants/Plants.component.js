import React, { Component } from 'react';
import { User } from '../../components/User'

export class Plants extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        console.log('Plant Id', this.props.match.params.id);
    }
    
    render() {
        return (
            <div>
                <h1>Plants Page</h1>
                <User />
            </div>
        );
    }
}
