import React, { Component } from 'react';
import Questions from "./Questions.json";
import QACards from '../../components/QACards';
import { Container, Row, Col } from 'reactstrap';
import Button from '../../components/Button';
import BottomNav from "../../components/BottomNavigation"


export class Survey extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        localStorage.setItem('matchScore', this.state.matchScore);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.buildMatch();
        window.location = "/results"
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
                <Container id="survey-container-body">

                {/* 'SURVEY PAGE' - ROW  --------------  */}
                <Row id="header-text">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <h3> Survey Page </h3> 
                    </Col>
                </Row>

                {Questions.map(question =>
                <QACards
                key={question.number}
                questionNumber={question.number}
                questionText={question.question}
                onChange={this.changeAnswer}
                value={this.state.value}
                Answer1={question.answers[0]}
                Answer2={question.answers[1]}
                Answer3={question.answers[2]}
                Answer4={question.answers[3]}
                Answer5={question.answers[4]}
                />
                )}

                {/* 'SUBMIT BUTTON' - ROW  --------------  */}
                <Row id="button-row">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Button className="rounded" onClick={this.handleSubmit} >Submit</Button>
                    </Col>
                </Row>

                </Container>

                <BottomNav />

            </div>
        );
    }
}
