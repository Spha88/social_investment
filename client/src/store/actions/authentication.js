import * as actionTypes from '../actionTypes';
import axios from 'axios';

const loggingIn = () => ({ type: actionTypes.LOGGING_IN })

const loginFailed = () => ({ type: actionTypes.LOGIN_FAILED })

const loggedIn = (token) => ({
    type: actionTypes.LOGGED_IN,
    payload: token
})

export const authenticate = loginDetails => dispatch => {
    // Start login
    dispatch(loggingIn());

    axios.post('http://localhost:3000/auth/signin', loginDetails)
        .then(res => {
            // Save token to local storage for persistance
            localStorage.setItem('token', res.data.token);

            // complete login successfully
            dispatch(loggedIn(res.data.token));
        })
        .catch(err => dispatch(loginFailed()));
}

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: actionTypes.LOGOUT });
}