<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router'
import Header from '../Components/Header'
import Frame from "../assets/Frame.png"
const DashBoard = () => {

=======
import React, { useState } from "react";
import Header from "../Components/Header";
import Frame from "../assets/Frame.png";
import { Link } from 'react-router'

const Dashboard = () => {
>>>>>>> 4248eb7aa525a0c97bc111376bd3083473f41345
  let userData  = JSON.parse(localStorage.getItem("userLoggedIn"))

  return (
    <>
      <Header />
<<<<<<< HEAD
      <main>
        <h1>Let's Start the Quiz</h1>
        <div className="time">
          <i className="fa-regular fa-clock"></i>
          <p>10 min</p>
=======
      <div className="quiz-main-container">
        <div className="quiz-top">
          <h2 className="heading">Let's Start the Quiz</h2>
          <i className="fa-regular fa-clock"></i> <span> 10 min</span>
          <ul>
            <li>Disclaimer</li>
            <li>Disclaimer</li>
          </ul>
>>>>>>> 4248eb7aa525a0c97bc111376bd3083473f41345
        </div>
        <ul className="disclaimer">
          <li>disclaimers</li>
          <li>disclaimers</li>
        </ul>
        <section id="start-container">
          <div className="frame-display-container">
            {/* <div className="blank-display">   */}
            <img id="frame" src={Frame} alt="Frame" />
            {/* </div> */}

<<<<<<< HEAD
            <div className="catchy-lines">
              <h2>"Test your knowledge with the ultimate quiz challenge!"</h2>
              <p>
                When you're done, review your answers and See <br />
                Your rank.
              </p>
            </div>
          </div>
          <Link to="/question"><button className="button" id="button">
            Start Quiz
          </button></Link>
        </section>
      </main>

      <div id="logout-container">
        <p id="my-name">Hii, sheela</p>
        <p id="my-email">sheela123@gmail.com</p>
        <button id="logout-button" >
          Logout
        </button>
      </div>
    </>
  )
}

export default DashBoard;
=======
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
            <Link to="/QuestionDisplay">
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={startQuiz}
              >
                Start Quiz
              </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
>>>>>>> 4248eb7aa525a0c97bc111376bd3083473f41345
