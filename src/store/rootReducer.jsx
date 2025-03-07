import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import questionReducer from './questions/questionReducer';
import userTestReducer from './UserTest/usertestReducer';

export default combineReducers({
    users: userReducer,
    questions: questionReducer,
    userTests: userTestReducer
});