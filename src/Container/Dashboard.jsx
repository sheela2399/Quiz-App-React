import React from 'react'
import Frame from"../assets/Frame.png"
import { Link } from 'react-router'
import Header from '../components/Header'

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
            <img id="frame" src={Frame} alt="Frame" />
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
    </>
  )
}

export default DashBoard;