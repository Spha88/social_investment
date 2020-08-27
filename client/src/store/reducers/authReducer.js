import * as actionTypes from '../actionTypes';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    loginError: false,

    signingUp: false,
    signedUp: false,
    signUpError: false,
    singUpErrorMessage: '',

    /**
     *  if token is in storage it is stored in this state variable
     *  when the page loads or refreshes, this helps with persistance
     */
    token: localStorage.getItem('token'),
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
                loginError: true,
                token: ''
            }
        case actionTypes.SIGNING_UP:
            return {
                ...state,
                signingUp: true
            }
        case actionTypes.SIGN_UP_FAILED:
            return {
                ...state,
                signingUp: false,
                signedUp: false,
                signUpError: true,
                singUpErrorMessage: action.payload,
                token: ''
            }
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                // completes log in process
                loggingIn: false,
                loggedIn: true,
                loginError: false,

                // or completes signup process
                signingUp: false,
                signedUp: true,
                signUpError: false,
                singUpErrorMessage: '',

                // both login and sign up request return a token on success
                token: action.payload,
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                token: '',
                loggedIn: false,
                signedUp: false
            }
        default:
            return state;
    }
}

export default reducer;