import React, { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../store/questions/questionAction";
import { addUserTestRequest, fetchUserTestRequest, updateUserTestRequest } from "../store/userTest/userTestAction";
import { useNavigate } from "react-router";
>>>>>>> 4248eb7aa525a0c97bc111376bd3083473f41345
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../store/questions/questionAction";
import { addUserTestRequest, fetchUserTestRequest, updateUserTestRequest } from "../store/UserTest/userTestAction";
import { useNavigate } from "react-router";

const QuestionDisplay = () => {
<<<<<<< HEAD
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState([]);
    const [progressBar, setProgressBar] = useState(0);
    const [score, setScore] = useState(0);
    const [quizStartTime, setQuizStartTime] = useState(new Date())
    const [logoutToggle, setLogoutToggle] = useState(false)
    console.log(quizStartTime);

    let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))
    const maxSliderValue = 100;
    const initialSilderValue = maxSliderValue / randomQuestions.length;

    const questions = useSelector((state) => state.questions.questions);
    const userTests = useSelector((state) => state.userTests.userTests);
    const navigate = useNavigate()
    console.log(userTests);


    const handleOptionSelect = (index) => {
        const updatedOptions = [...selectedOption];
        updatedOptions[questionIndex] = index;
        setSelectedOption(updatedOptions);
        console.log(index);
        console.log("updatedoptions", updatedOptions);
    };

    const calculateScore = (timeTaken) => {
        let totalScore = 0;
        randomQuestions.forEach((question, index) => {
            if (selectedOption[index] === question.correct) {
                totalScore += 2;
            }
        });
        const finalScore = totalScore;
        setScore(finalScore);
        let text = "Are you sure you want to submit";
        if (confirm(text) == true) {
            alert(`Your final score is ${finalScore} out of 20 and Time taken is ${timeTaken}`);
        }

        const test = { totalScore, randomQuestions, selectedOption, timeTaken }
        let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))
        const user = userTests.find((user) => userInfo.email === user.email)

        if (user) {
            const updatedTests = [...user.tests, test]
            console.log({ totalScore, tests: [updatedTests] })
            dispatch(updateUserTestRequest({ id: user.id, fullName: userInfo.fullName, email: userInfo.email, totalScore, tests: updatedTests }))
        } else {
            dispatch(addUserTestRequest({ fullName: userInfo.fullName, email: userInfo.email, totalScore: totalScore, tests: [test] }))
        }
        navigate('/leaderboard')
    };


    const handleNextQuestion = () => {
        if (selectedOption[questionIndex] === undefined) {
            alert("Please select an answer before moving to the next question.");
            return;
        }
        if (questionIndex < randomQuestions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setProgressBar(progressBar + 1);
        }
        else {
            const quizEndTime = new Date();
            console.log(quizEndTime)
            const timeTaken = calculateTimeTaken(quizStartTime, quizEndTime);
            calculateScore(timeTaken)
        }
    };

    function calculateTimeTaken(startTime, endTime) {
        const timeDiff = Math.floor((endTime - startTime) / 1000); // Time difference in seconds
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        return `${minutes} : ${seconds} `;
    }

    const handlePreviousQuestion = () => {
        setQuestionIndex(questionIndex - 1);
        setProgressBar(progressBar - 1);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuestionRequest());
        dispatch(fetchUserTestRequest())
        console.log(questions);
    }, [dispatch]);

    // Randomly generating 10 questions from main questions
    useEffect(() => {
        const shuffleQuestions = () => {
            let shuffledData = Array.from(questions);
            shuffledData.sort(() => Math.random() - 0.5);
            return shuffledData.slice(0, 3);
        };
        setRandomQuestions(shuffleQuestions());
    }, [questions]);
    console.log({ randomQuestions });

    return (
        <>
            <Header />
            {randomQuestions.length ? (
                <section id="question-answer">
                    <h1 id="question-number">
                        Question {questionIndex + 1} of {randomQuestions.length}
                    </h1>

                    <div id="progressbar-container">
                        <div
                            id="progress-bar"
                            style={{
                                width: `${initialSilderValue * progressBar +
                                    maxSliderValue / randomQuestions.length
                                    }%`,
                            }}
                        ></div>
                    </div>
                    <div className="question">
                        <h2 id="question-text">
                            {randomQuestions[questionIndex]?.question}
                        </h2>
                    </div>
                    <div className="answer">
                        <ol type="1" id="options-list">
                            {randomQuestions[questionIndex].answers.map((option, index) => (
                                <li
                                    id="option-2"
                                    class={`option ${selectedOption[questionIndex] === index ? "selected" : ""
                                        }`}
                                    key={index}
                                    onClick={() => handleOptionSelect(index)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ol>
                    </div>
                    {questionIndex > 0 && (
                        <button onClick={handlePreviousQuestion} id="prev">
                            <i className="fa-solid fa-arrow-left"></i> Previous
                        </button>
                    )}

                    <button onClick={handleNextQuestion} id="next">
                        {questionIndex === randomQuestions.length - 1
                            ? "Finish"
                            : "Next"}{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </section>
            ) : null}

            <div id="logout-container">
                <p id="my-name">Hii, Amit</p>
                <p id="my-email">amit2546@gmail.com</p>
                <button id="logout-button">
                    Logout
                </button>
                <button id="logout-button">Edit</button>
            </div>

        </>
    )
}
=======
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [progressBar, setProgressBar] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStartTime, setQuizStartTime] = useState(new Date())
  const [logoutToggle, setLogoutToggle] = useState(false)
  console.log(quizStartTime)

  let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))

  const maxSliderValue = 100;
  const initialSilderValue = maxSliderValue / randomQuestions.length;
  const questions = useSelector((state) => state.questions.questions);
  const userTests = useSelector((state) => state.userTests.userTests);
  const navigate = useNavigate()
  console.log(userTests)

  // Selecting options
  const handleOptionSelect = (index) => {
    const updatedOptions = [...selectedOption];
    updatedOptions[questionIndex] = index;
    setSelectedOption(updatedOptions);
    console.log(index);
    console.log("updatedoptions", updatedOptions);
  };

  // Counting score
  const calculateScore = (timeTaken) => {
    let totalScore = 0;
    randomQuestions.forEach((question, index) => {
      if (selectedOption[index] === question.correct) {
        totalScore += 10;
      }
    });
    const finalScore = totalScore;
    setScore(finalScore);
    let text = "Are you sure you want to submit";
    if (confirm(text) == true) {
      alert(`Quiz finished, Your final score is ${finalScore} out of 100 and Time taken is ${timeTaken}`);
    }

    const test = { totalScore, randomQuestions, selectedOption, timeTaken }
    let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))
    const user = userTests.find((user) => userInfo.email === user.email)

    if (user) {
      const updatedTests = [...user.tests, test]
      console.log({ totalScore, tests: [updatedTests] })
      dispatch(updateUserTestRequest({ id: user.id, fullName: userInfo.fullName, email: userInfo.email, totalScore, tests: updatedTests }))
    } else {
      dispatch(addUserTestRequest({ fullName: userInfo.fullName, email: userInfo.email, totalScore: totalScore, tests: [test] }))
    }
    navigate('/leaderboard')
  };

  //Next button functionality to show new question
  const handleNextQuestion = () => {
    if (selectedOption[questionIndex] === undefined) {
      alert("Please select an answer before moving to the next question.");
      return;
    }
    if (questionIndex < randomQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setProgressBar(progressBar + 1);
    }
    else {
      const quizEndTime = new Date();
      console.log(quizEndTime)
      const timeTaken = calculateTimeTaken(quizStartTime, quizEndTime);
      calculateScore(timeTaken)
    }
  };

  // calculating time taken by user to finish the game
  function calculateTimeTaken(startTime, endTime) {
    const timeDiff = Math.floor((endTime - startTime) / 1000); // Time difference in seconds
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    return `${minutes} : ${seconds} `;
  }


  // Previuos button functinality
  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
    setProgressBar(progressBar - 1);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestionRequest());
    dispatch(fetchUserTestRequest())
    console.log(questions);
  }, [dispatch]);

  // Randomly generating 10 questions from main questions
  useEffect(() => {
    const shuffleQuestions = () => {
      let shuffledData = Array.from(questions);
      shuffledData.sort(() => Math.random() - 0.5);
      return shuffledData.slice(0, 3);
    };
    setRandomQuestions(shuffleQuestions());
  }, [questions]);
  console.log({ randomQuestions });

  return (
    <>
     <Header/>
      {randomQuestions.length ? (
        <section id="question-answer">
          <h1 id="question-number">
            Question {questionIndex + 1} of {randomQuestions.length}
          </h1>

          <div id="progressbar-container">
            <div
              id="progress-bar"
              style={{
                width: `${initialSilderValue * progressBar +
                  maxSliderValue / randomQuestions.length
                  }%`,
              }}
            ></div>
          </div>
          <div className="question">
            <h2 id="question-text">
              {randomQuestions[questionIndex]?.question}
            </h2>
          </div>
          <div className="answer">
            <ol type="1" id="options-list">
              {randomQuestions[questionIndex].answers.map((option, index) => (
                <li
                  id="option-2"
                  class={`option ${selectedOption[questionIndex] === index ? "selected" : ""
                    }`}
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </li>
              ))}
            </ol>
          </div>
          {questionIndex > 0 && (
            <button onClick={handlePreviousQuestion} id="prev">
              <i className="fa-solid fa-arrow-left"></i> Previous
            </button>
          )}

          <button onClick={handleNextQuestion} id="next">
            {questionIndex === randomQuestions.length - 1
              ? "Finish"
              : "Next"}{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      ) : null}

      <div id="logout-container">
        <p id="my-name">Hii, sheela</p>
        <p id="my-email">sheelamishra19992gmail.com</p>
        <button id="logout-button" onClick={()=> setLogoutToggle}>
          Logout
        </button>
        <button id="logout-button">Edit</button>
      </div>
    </>
  );
};
>>>>>>> 4248eb7aa525a0c97bc111376bd3083473f41345

export default QuestionDisplay;
