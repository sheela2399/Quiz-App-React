import React from 'react'
import { Link } from 'react-router'
import Header from '../Components/Header'
import Frame from "../assets/Frame.png"
const DashBoard = () => {

  let userData  = JSON.parse(localStorage.getItem("userLoggedIn"))

  return (
    <>
      <Header />
      <main>
        <h1>Let's Start the Quiz</h1>
        <div className="time">
          <i className="fa-regular fa-clock"></i>
          <p>10 min</p>
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