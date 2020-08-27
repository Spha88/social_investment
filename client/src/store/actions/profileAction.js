import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';



export const updateProfile = formData => dispatch => {
    dispatch({ type: actionTypes.UPDATING });

    axios.put('/profile', formData)
        .then(res => {
            dispatch({
                type: actionTypes.UPDATE_SUCCESS,
                payload: res.data.profile
            })
        })
        .catch(err => {
            dispatch({
                type: actionTypes.UPDATE_FAILED,
                payload: err.response.data.error
            })
        })
}