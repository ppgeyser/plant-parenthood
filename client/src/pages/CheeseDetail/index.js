import React from 'react';
import CheeseApi from '../../utils/API';

export class CheeseDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cheese: {
                name: 'No Cheese',
                price: 0,
                description: 'loading'
            }
        };
    }

    componentDidMount() {
        const { 
          id  
        } = this.props.match.params;
        if (id) {
            CheeseApi.getCheeseById(id)
                .then(cheese => {
                    this.setState({
                        cheese,
                    });
                })
                    .catch(err =>
                    console.log(`ERR - Could not load cheese id: ${id}`, err),
                    this.setState({
                        cheese: {
                            name: 'Smellyyyy Cheese',
                            price: 1000,
                            description: 'Stinky stuffffff!!',
                        }
                    }));
                }
    }

    render() {
        return (
            <div>
                <h1>Welcomes {this.props.match.params.id}</h1>
                <h2>Cheese name: {this.state.cheese.name}</h2>
                <h2>Price: ${this.state.cheese.price / 100 }</h2>
                <h2>Description: {this.state.cheese.description}</h2>
            </div>
        )
    }
}