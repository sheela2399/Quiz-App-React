import React from "react";
import Header from "../Components/Header";
import crown from "../assets/crown.png"
import Vector from "../assets/Vector.png"

const LeaderBoard = () => {
    return (
        <>
        <Header/>
        <div class="rank-heading dis-col-center">
        <h1 id="rankDisplay"></h1>
        <h2 id="rankScore"></h2>
         {/* <p class="grey-text">Supporting Text</p>  */}
    </div>
    <div class="rank-holders">
        <div class="second dis-col-center">
            <h2 class="rank-number">#2</h2>
            <div class="profile-pic dis-col-center" id="profile-second">
                 {/* <img alt="User 2">   */}
                 <span id="top2Name" class="topernames"></span>
            </div>
            <div class="rank dis-col-even" id="second">
                <div class="dis-col-center">
                <h2 class="score">Score</h2>
                <h4 id="top2Score" class="topScores"></h4>
            </div>
        </div>
    </div>
    <div class="first dis-col-center">
        <h2 class="rank-number"></h2>
        <img src={crown} alt="crown"/>
        <div class="profile-pic dis-col-center" id="profile-first">
             {/* <img alt="User 1">  */}
            <span id="top1Name" class="topernames"></span>
        </div>
        <div class="rank dis-col-even" id="first">
            <div class="dis-col-center">
            <h2 class="score">Score</h2>
            <h4 id="top1Score" class="topScores"></h4>
        </div>
    </div>
    </div>

    <div class="third dis-col-center">
        <h2 class="rank-number">#3</h2>
        <div class="profile-pic dis-col-center" id="profile-third">
             {/* <img alt="User 3">  */}
             <span id="top3Name" class="topernames"></span>
        </div>

        <div class="rank dis-col-even" id="third">
            <div class="dis-col-center">
                <h2 class="score">Score</h2>
                <h4 id="top3Score" class="topScores"></h4>
            </div>
        </div>
    </div>
    </div>

    <div class="rank-list">
        <img src={Vector} alt=""/>
        <div class="ranking font-heavy">
            <div class="rank-item dis-row-between" id="currentscore">
               <div class=" dis-row-even" id="ExtraRank">
                   <p id="currentUserRank"></p> <span id="currentUserName" class="topernames"></span>
               </div> 
                <p id="currentUserScore" class="topScores"></p>
            </div>
            <div class="rank-item dis-row-between">
                <p>#6 <span id="top6Name" class="topernames"></span></p>
                <p id="top6Score" class="topScores"></p>
            </div>
            <div class="rank-item dis-row-between">
                <p>#5 <span id="top5Name" class="topernames"></span> </p>
                <p id="top5Score" class="topScores"></p>
            </div>
            <div class="rank-item dis-row-between">
                <p >#4 <span id="top4Name" class="topernames"></span></p>
                <p id="top4Score" class="topScores"></p>
            </div>
        </div>
    </div>
    </>
    );
};

export default LeaderBoard;