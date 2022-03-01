import { USERNAME_CHANGED, PASSWORD_CHANGED, LOGIN_USER, 
    LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, USER_NOT_LOGGED_IN, LOGIN_IN_PROGRESS } from '../utils/constant';

const INITIAL_STATE = {
    username: '',
    password: '',
    error: '',
    loading: false,
    authenticated: null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USERNAME_CHANGED: 
            return { ...state, username: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_IN_PROGRESS:
            return { ...state, loading: true };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...INITIAL_STATE, authenticated: true };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        case USER_NOT_LOGGED_IN:
            return { ...state, authenticated: false }
        default:
            return state;
    }
};
