import { BASE_URL, ALL_MEETING_DETAILS_URL } from '../utils/endpointUrl';
import { ALL_MEETINGS_DETAILS } from '../utils/constant';
import axios from 'axios';

export const getAllMeetingDetails = () => (dispatch) => {
    console.log("getAllMeetingDetails");
    let token = localStorage.getItem('token');
    var config = {
        method: 'get',
        url: BASE_URL + ALL_MEETING_DETAILS_URL,
        headers: { 'Authorization': 'Basic '+ token }
    };
    axios(config)
    .then(function(response){
        console.log('successsssssssssss ');
        console.log(response.data);
        dispatch({ type: ALL_MEETINGS_DETAILS, payload: response.data })
    })
    .catch(function(error){
        console.log(error)
        dispatch({ type: USER_NOT_LOGGED_IN })
    })
}