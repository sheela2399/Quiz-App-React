import { combineReducers } from 'redux';
import userReducer from "./User/userReducer"
import questionReducer from './Questions/questionReducer';
import userTestReducer from './UserTest/userTestReducer';

export default combineReducers({
    users: userReducer,
    questions: questionReducer,
    userTests : userTestReducer
});