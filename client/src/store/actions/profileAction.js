import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';

export const cleanUp = () => dispatch => {
    dispatch({ type: actionTypes.CLEAN_UP })
}

export const updateProfile = formData => dispatch => {
    dispatch({ type: actionTypes.UPDATING });

    setTimeout(() => {
        axios.put('/profile', formData)
            .then(res => {
                dispatch({
                    type: actionTypes.UPDATE_SUCCESS,
                    payload: res.data.profile
                })
            })
            .catch(err => {
                if (err.response.data === "Unauthorized") {
                    localStorage.removeItem('token');
                    dispatch({ type: actionTypes.LOGOUT })
                }
                dispatch({
                    type: actionTypes.UPDATE_FAILED,
                    payload: err.response.data.error
                })
            })
    }, 500)
}

export const fetchProfile = () => dispatch => {
    dispatch({ type: actionTypes.FETCHING_PROFILE });

    axios.get('/profile')
        .then(res => {
            dispatch({
                type: actionTypes.FETCHING_PROFILE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            if (err && err.response.data === "Unauthorized") {
                localStorage.removeItem('token');
                return dispatch({ type: actionTypes.LOGOUT })
            }
            dispatch({
                type: actionTypes.FETCHING_PROFILE_FAILED,
                payload: err.response.data.error
            })
        })
}