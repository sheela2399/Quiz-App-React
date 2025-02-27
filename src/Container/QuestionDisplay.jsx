import React from "react";
import Header from "../Components/Header";

const QuestionDisplay = () => {

    const previousQuestion = () =>{

    }

    const nextQuestion = () =>{

    }

    return (
        <>
        <Header/>
        <div className="ques-container">
        <div id="questionHead"></div>
        <br/>
        <div className="progress-bar">
            <div className="progress" id="progress"></div>
        </div>
        <br/>
        <div className="display-question">
            <div className="quest-head-items">
                <h2 id="questionNum"></h2>
                <h2 id="question"></h2>

            </div>
            <br/>
            <div id="options">
                 {/* question will display here  */}
            </div>
            <div className="display-buttons">
                <button id="previousquestion" onClick={previousQuestion}></button>
                <button id="nextquestion" onClick={nextQuestion}></button>
            </div>
        </div>
    </div>
        </>
    )
}

export default QuestionDisplay;
