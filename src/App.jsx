import React, { useState } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Container/Login';
import SignUp from './Container/SignUp'; 
import QuestionDisplay from './Container/QuestionDisplay';
import LeaderBoard from './Container/LeaderBoard';
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
import AdminLogin from './Admin/AdminLogin'
import AdminDashboard from './Admin/AdminDashboard'
import UserInfo from './Admin/UserInfo'
import TestDetails from './Admin/TestDetails'
import FullTestDetails from './Admin/FullTestDetails'
import Quizzes from "./Admin/Quizzes"
import DashBoard from './Container/Dashboard';

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/quizzes' element={<Quizzes/>} />
          <Route path='/userinfo' element={<UserInfo/>} />
          <Route path='/testdetails/:id' element={<TestDetails />} />
          <Route path='/fulltestdetails/:id/:testIndex' element={<FullTestDetails />} />
        </Route>
        <Route element={<PrivateRoutes />}>
        <Route path='/dashBoard' element={<DashBoard />} />
        <Route path='/question' element={<QuestionDisplay />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
