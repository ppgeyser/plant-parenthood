import React from "react";
// import Button from "../Button" we can use our button component instead once this merge completes;

const QACards = props => {
    return (        
        <div className="card">
            <div className="card-body">
                <div>
                    <h2>Question #{props.questionNumber}:</h2>
                    <h3>{props.questionText}</h3>
                    <div className="btn-group dropright">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Answer:</button>
                        <div className="dropdown-menu" id={'q'+props.questionNumber}>
                            <a className="dropdown-item" value='1'>{props.Answer1}</a>
                            <a className="dropdown-item" value='2'>{props.Answer2}</a>
                            <a className="dropdown-item" value='3'>{props.Answer3}</a>
                            <a className="dropdown-item" value='4'>{props.Answer4}</a>
                            <a className="dropdown-item" value='5'>{props.Answer5}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QACards;