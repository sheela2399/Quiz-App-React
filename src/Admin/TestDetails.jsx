import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router'
import { fetchUserTestRequest } from '../store/UserTest/userTestAction'
import Sidebar from '../Components/Sidebar'
import Header from '../components/Header'

const TestDetails = () => {

    const userTest = useSelector((state) => state.userTests.userTests)
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(userTest[0])

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

    const selectedUser = userTest[id];

    return (
        <>
            <Header/>

            <div class="admin-main-ciontainer">
                <Sidebar/>

                <section class="main-content">
                    <div class="users-test-attempt">
                        <h1>User Test Attempts</h1> 
                        <p id="user-name">{userTest[id]?.fullName}</p>
                        <p id="user-email">{userTest[id]?.email}</p>

                        <table class="table-three" >
                            <thead>
                                <tr>
                                    <th>Test Attempt</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                    <th>Time Spent(minute)</th>
                                    <th>View Test Details</th>
                                </tr>
                            </thead>

                            <tbody>

                             {selectedUser?.tests?.map((user, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.totalScore}</td>
                                        <td>08-03-2025</td>
                                        <td>{user.timeTaken}</td>
                                        <td>{<Link to={`/fulltestdetails/${id}/${index}`}>View More</Link>}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </section>
            </div>
        </>
    )
}

export default TestDetails;