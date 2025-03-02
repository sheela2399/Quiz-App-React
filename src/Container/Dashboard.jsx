import React, { useState } from "react";
import Header from "../Components/Header";
import Frame from "../assets/Frame.png";

const Dashboard = () => {
  const startQuiz = () => {};

  return (
    <>
      <Header />
      <div className="quiz-main-container">
        <div className="quiz-top">
          <h2 className="heading">Let's Start the Quiz</h2>
          <i className="fa-regular fa-clock"></i> <span> 10 min</span>
          <ul>
            <li>Disclaimer</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <div className="catchy-intro dis-col-center">
          <div className="catchy-img">
            <img src={Frame} alt="Frame" />
          </div>
          <div className="catchy-content dis-col-center">
            <h2 className="heading">
              Challenge Your Mind - Compete in the Quiz Club
            </h2>
            <p className="grey-text">
              Welcome to this esteemed platform where brilliance collides with
              knowledge.
            </p>
            <p className="grey-text">
              When you’re done, review your answers and See your rank.
            </p>
          </div>
          <div className=" start-btn-div dis-row-center">
            <a href="question.html">
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={startQuiz}
              >
                Start Quiz
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
