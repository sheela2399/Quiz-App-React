import React, { useEffect , useState} from "react";
import Header from "../components/Header";
import crown from "../assets/crown.png"
import Vector from "../assets/Vector.png"
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTestRequest } from '../store/UserTest/userTestAction'

const LeaderBoard = () => {

    const userTests = useSelector((state) => state.userTests.userTests);
    const dispatch = useDispatch()

    const [sortedUsers, setSortedUsers] = useState([]);
    const [userIndex, setUserIndex] = useState(null)

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userLoggedIn")))
    const [currentUserMarks, setCurrentUserMarks] = useState(null)

    console.log(userData.email)

    useEffect(() => {
        dispatch(fetchUserTestRequest());
    }, [dispatch]);

    useEffect(() => {
        const sortedData = userTests.sort((a, b) => b.totalScore - a.totalScore);
        setSortedUsers(sortedData);
        console.log(sortedData)
    }, [userTests]);

    useEffect(() => {
        if (userData && sortedUsers.length > 0) {
            const index = sortedUsers.findIndex(
                (user) => user.fullName === userData.fullName
            ) + 1;
            const user = sortedUsers.find((user) => user.email === userData.email);
            console.log(user)
            setUserIndex(index);
            setCurrentUserMarks(user.totalScore);

        }
    }, [sortedUsers, userData]);

    return (
        <>
            <Header />
            <section id="leaderboard-main">
                <h1 id="user-rank-title">Wow You Rank {userIndex || 'N/A'}</h1>
                <p id="supporting-text">Your Score: {currentUserMarks || 0}</p>
            </section>

            <section id="score-board">
                {
                    sortedUsers?.slice(0, 1).map((user) => (
                        <div id="first-rank-container">
                            <div className="first-rank">
                                <div className="crown">
                                    <img src={crown} alt="" />
                                </div>
                                <div className="bg-color"></div>
                                <div className="actual-score">
                                    <h2>Score</h2>
                                    <p>{user.totalScore}</p>
                                </div>

                                <div className="circle">
                                    <p className="username">{user.fullName}</p>
                                    {/* <img src={mypic} alt="" /> */}
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    sortedUsers?.slice(1, 2).map((user) => (
                        <div id="second-rank-container">
                            <div className="second-rank">
                                <div className="bg-color2"><p className="rank2">#2</p></div>
                                <div className="actual-score2">
                                    <h2>Score</h2>
                                    <p>{user.totalScore}</p>
                                </div>
                                <div className="circle">
                                    <p className="username">{user.fullName}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    sortedUsers.slice(2, 3).map((user) => (
                        <div id="third-rank-container">
                            <div className="third-rank">
                                <div className="bg-color3"><p className="rank2">#3</p></div>
                                <div className="actual-score3">
                                    <h2>Score</h2>
                                    <p>{user.totalScore}</p>
                                </div>
                                <div className="circle">
                                    <p className="username">{user.fullName}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="radius-design">
                    <img src={Vector} alt="" />
                    <div className="ranking-board">
                        {
                            sortedUsers.slice(3, 6).map((user, index) => (
                                <div className="ranking">
                                    <p className="user-name"><span>#{index + 4}</span> {user.fullName}</p>
                                    <p className="user-name">{user.totalScore}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default LeaderBoard;