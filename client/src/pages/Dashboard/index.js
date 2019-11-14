import React from 'react';
import { Login } from '../../components/Login/Login.component'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userPlants: {},
        };
    }

    render() {
        console.log(this.state.allPlants)
        return(
            <div>
                <p>This is the Dashboard Page</p>
                <a href="/survey"  data={this.state.allPlants}>Survey</a>
                <Login />
            </div>
            
        )
    }
}

export default Dashboard;