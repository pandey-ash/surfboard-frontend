import { ALL_MEETINGS_DETAILS } from '../utils/constant';

const INITIAL_STATE = {
    meetings: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ALL_MEETINGS_DETAILS:
            return { ...state, meetings: action.payload };
        default:
            return state;
    }
}

