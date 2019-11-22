import React, { Component } from 'react';
import QACards from '../../components/QACards'
import Button from '../../components/Button'
import BottomNav from "../../components/BottomNavigation"

export class Survey extends Component {
    constructor(props){
        super(props);
        this.state = {
            allPlants: {
                type: "Pothos",
                color: "green",
            },
            surveyQuestions: {},
            q1: "1",
            q2: "1",
            q3: "1",
            q4: "1",
            q5: "1",
            matchScore: []
        };
    }
    
    componentDidMount(){
        
    }

    componentDidUpdate(){
        console.log(this.state.matchScore)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.buildMatch();
    }
    
    buildMatch = () => {
        this.setState(state => {
            const matchScore = [...state.matchScore, state.q1, state.q2, state.q3, state.q4, state.q5];
            return {
                matchScore
            }
        })
    }

    changeAnswer = (event) => {
        switch (event.target.id) {
            case 'q1':
                this.setState({q1: event.target.value});
                break;
            case 'q2':
                this.setState({q2: event.target.value});
                break;
            case 'q3':
                this.setState({q3: event.target.value});
                break;
            case 'q4':
                this.setState({q4: event.target.value});
                break;
            case 'q5':
                this.setState({q5: event.target.value});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <h1>Survey page</h1>
                <QACards
                questionNumber='1'
                questionText='this is questionText'
                onChange={this.changeAnswer}
                value={this.state.value}
                Answer1='this is props.Answer1'
                Answer2='this is props.Answer2'
                Answer3='this is props.Answer3'
                Answer4='this is props.Answer4'
                Answer5='this is props.Answer5'
                />
                <br></br>
                <QACards
                questionNumber='2'
                questionText='this is questionText'
                onChange={this.changeAnswer}
                value={this.state.value}
                Answer1='this is props.Answer1'
                Answer2='this is props.Answer2'
                Answer3='this is props.Answer3'
                Answer4='this is props.Answer4'
                Answer5='this is props.Answer5'
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
                <BottomNav />
            </div>
        );
    }
}
