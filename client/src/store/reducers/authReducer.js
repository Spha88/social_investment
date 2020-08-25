import * as actionTypes from '../actionTypes';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    error: false,
    errorMessage: '',
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            }
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: true,
                errorMessage: 'To be changed now',
                token: ''
            }
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                token: action.payload,
                error: false,
                errorMessage: ''
            }
        default:
            return state;
    }
}

export default reducer;