import React from "react";
// import Button from "../Button" we can use our button component instead once this merge completes;

const QACards = props => {
    return (        
        <div className="card">
            <div className="card-body">
                <div>
                    <h2>Question #{props.questionNumber}:</h2>
                    <h3>{props.questionText}</h3>
                        <select className="custom-select" value={props.value} onChange={props.onChange} onClick={props.onClick} id={'q'+props.questionNumber}>
                            <option defaultValue='selected'>Answer:</option>
                            <option value='1'>{props.Answer1}</option>
                            <option value='2'>{props.Answer2}</option>
                            <option value='3'>{props.Answer3}</option>
                            <option value='4'>{props.Answer4}</option>
                            <option value='5'>{props.Answer5}</option>
                        </select>
                </div>
            </div>
        </div>
    )
}

export default QACards;