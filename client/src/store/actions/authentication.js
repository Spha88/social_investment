import * as actionTypes from '../actionTypes';
import axios from 'axios';

console.log('I have reloaded')

const loggingIn = () => {
    return { type: actionTypes.LOGGING_IN }
}

const loginFailed = () => {
    return { type: actionTypes.LOGIN_FAILED }
}

const loggedIn = (token) => {
    return {
        type: actionTypes.LOGGED_IN,
        payload: token
    }
}

export const authenticate = loginDetails => dispatch => {

    dispatch(loggingIn());

    axios.post('http://localhost:3000/auth/signin', loginDetails)
        .then(res => {
            // Save token to local storage for persistance
            localStorage.setItem('token', res.data.token);
            dispatch(loggedIn(res.data.token));
        })
        .catch(err => {
            dispatch(loginFailed())
        })
}