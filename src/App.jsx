import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Container/Login';
import SignUp from './Container/SignUp';
import dashboard from './Container/Dashboard';
import QuestionDisplay from './Container/QuestionDisplay';
import LeaderBoard from './Container/LeaderBoard';
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'


function App() {
  // const [showPassword, setShowPassword] = useState(false);

  // const handlePasswordToggle = () => {
  //   setShowPassword((prev) => !prev);
  // };

  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/userinfo' element={<UsersInformation />} />
          <Route path='/testdetails/:id' element={<TestDetails />} />
          <Route path='/fulltestdetails/:id/:testIndex' element={<FullTestDetails />} />
        </Route>
        <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/question' element={<QuestionDisplay />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
