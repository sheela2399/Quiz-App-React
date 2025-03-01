import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Container/Login';
import SignUp from './Container/SignUp';
import Quiz from './Container/Dashboard';
import QuestionDisplay from './Container/QuestionDisplay';
import LeaderBoard from './Container/LeaderBoard';


function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login handlePassword={handlePasswordToggle} showPassword={showPassword} />} />
        <Route path="/signup" element={<SignUp handlePassword={handlePasswordToggle} showPassword={showPassword}/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questions" element={<QuestionDisplay />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        {/* Redirect example */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
