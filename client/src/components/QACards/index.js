import React from "react";
import { UncontrolledButtonDropdown } from 'reactstrap';
// import Button from "../Button" we can use our button component instead once this merge completes;

const QACards = props => {
    return (        
        <div className="card">
            <div className="card-body">
                <div>
                    <h6>Question #{props.questionNumber}:</h6>
                    <h5>{props.questionText}</h5>
                    <UncontrolledButtonDropdown>
                        <select className="custom-select" value={props.value} onChange={props.onChange} onClick={props.onClick} id={'q'+props.questionNumber}>
                            <option defaultValue='1'>Answer:</option>
                            <option hidden={props.Answer1 ? false : true} value='1'>{props.Answer1}</option>
                            <option hidden={props.Answer2 ? false : true} value='2'>{props.Answer2}</option>
                            <option hidden={props.Answer3 ? false : true} value='3'>{props.Answer3}</option>
                            <option hidden={props.Answer4 ? false : true}  value='4'>{props.Answer4}</option>
                            <option hidden={props.Answer5 ? false : true}  value='5'>{props.Answer5}</option>
                        </select>
                    </UncontrolledButtonDropdown>
                </div>
            </div>
        </div>
    )
}

export default QACards;