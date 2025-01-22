import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Quiz from './Pages/Quiz';
import QuestionDisplay from './Pages/QuestionDisplay';
import LeaderBoard from './Pages/LeaderBoard';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Login handlePassword={handlePasswordToggle} showPassword={showPassword}></Login>
      <SignUp handlePassword={handlePasswordToggle} showPassword={showPassword}></SignUp>
      <Quiz></Quiz>
      <QuestionDisplay />
      <LeaderBoard />
    </>
  );
}

export default App;
