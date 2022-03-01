import { combineReducers } from 'redux';
import login from './LoginReducer';
import meetings from './MeetingReducer';

export default combineReducers({
    login, meetings
});
