import axios from 'axios';
import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_USER, 
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, USER_NOT_LOGGED_IN, LOGIN_IN_PROGRESS } from '../utils/constant';
import { BASE_URL, LOGIN_CHECK, LOGIN_URL } from '../utils/endpointUrl';

export const usernameChanged = (text) => {
    return {type: USERNAME_CHANGED, payload: text}
}

export const passwordChanged = (text) => {
    return {type: PASSWORD_CHANGED, payload: text}
}

export const loginUser = (username, password) => (dispatch) => {
    dispatch({ type: LOGIN_IN_PROGRESS });

    var config = {
        method: 'get',
        url: BASE_URL + LOGIN_URL,
        auth: {
            username, password
        }
    };
    axios(config)
    .then(function(response){
        const token = window.btoa(username + ':' + password);
        localStorage.setItem('token', token);
        dispatch({ type: LOGIN_USER_SUCCESS})
    })
    .catch(function(error){
        dispatch({ type: LOGIN_USER_FAIL, payload: 'Invalid username password' })
    })
}

export const checkIfLoggedin = () => (dispatch) => {
    let token = localStorage.getItem('token');

    if (!token) {
        dispatch({ type: USER_NOT_LOGGED_IN });
    } else {
        var config = {
            method: 'get',
            url: BASE_URL + LOGIN_CHECK,
            headers: { 'Authorization': 'Basic '+ token }
        };
        axios(config)
        .then(function(response){
            dispatch({ type: LOGIN_USER_SUCCESS })
        })
        .catch(function(error){
            dispatch({ type: USER_NOT_LOGGED_IN })
        })
    }
}

