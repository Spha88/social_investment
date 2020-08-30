import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';

const loggingIn = () => ({ type: actionTypes.LOGGING_IN })

const loginFailed = () => ({ type: actionTypes.LOGIN_FAILED })

const loggedIn = (token) => ({
    type: actionTypes.LOGGED_IN,
    payload: token
})

export const authenticate = loginDetails => dispatch => {
    // Start login
    dispatch(loggingIn());

    axios.post('/auth/signin', loginDetails)
        .then(res => {
            // Save token to local storage for persistance
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

            // complete login successfully
            dispatch(loggedIn(res.data.token));
        })
        .catch(err => dispatch(loginFailed()));
}

export const signup = emailAndPassword => dispatch => {
    dispatch({ type: actionTypes.SIGNING_UP });

    axios.post('/auth/signup', emailAndPassword)
        .then(res => {
            // Save token to local storage for persistance
            localStorage.setItem('token', res.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

            // complete signup successfully
            dispatch(loggedIn(res.data.token));
        })
        .catch(err => {
            if (err.response.data.error) {
                dispatch({
                    type: actionTypes.SIGN_UP_FAILED,
                    payload: err.response.data.error
                })
            }
        });
}

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: actionTypes.LOGOUT });
}

// checks if there is a token and if not logs out else logs in
// this is called every time app renders
export const checkLoggedIn = () => async dispatch => {
    const token = await localStorage.getItem('token');
    if (token) {
        dispatch(loggedIn(token));
    } else {
        dispatch({ type: actionTypes.LOGOUT });
    }
}