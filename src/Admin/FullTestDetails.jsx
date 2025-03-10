import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchUserTestRequest } from '../store/UserTest/userTestAction'
import Sidebar from '../Components/Sidebar'
import Header from '../components/Header'

const FullTestDetails = () => {

    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()
    const { id, testIndex } = useParams()
    console.log(userTest[id]?.tests[testIndex])

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])


    const selectedUserTest = userTest[id]?.tests[testIndex];
    console.log(selectedUserTest)

    return (
        <>
           <Header/>

            <div class="admin-main-ciontainer">
                <Sidebar />

                <section class="main-content">
                    <div class="test-attempt-details">
                        <h1>Test Attempts Details</h1>
                        <div class="username-email">
                            <p class="users-name">{userTest[id]?.fullName}</p>
                            <p class="users-email">{userTest[id]?.email}</p>
                        </div>
                        <ul class="top-information">
                            <li class="score"><strong>Score:</strong>{selectedUserTest?.totalScore}</li>
                            <li class="timestamp"><strong>Date:</strong>2024-10-15</li>
                            <li class="time-spent"><strong>Time Spent:</strong>{selectedUserTest?.timeTaken}</li>
                        </ul>
                        <div class="container">
                            {console.log(userTest)}
                            {
                                selectedUserTest?.randomQuestions?.map((question, index) => (
                                    <div class="questions-container">
                                        <p class="question">{question.question}</p>
                                        <ul>
                                            <li>{question.answers[0]}</li>
                                            <li>{question.answers[1]}</li>
                                            <li>{question.answers[2]}</li>
                                            <li>{question.answers[3]}</li>
                                        </ul>

                                        <p class="your-answer">Your Answer:{question.answers[selectedUserTest.selectedOption[index]]}</p>
                                        <p class="correct-answer">Correct Answer:{question.answers[question.correct]}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default FullTestDetails