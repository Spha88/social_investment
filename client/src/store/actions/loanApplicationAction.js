import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';

export const applyForLoan = () => dispatch => {
    dispatch({ type: actionTypes.APPLYING_FOR_LOAN });

    axios.get('/profile')
        .then(res => {
            dispatch({
                type: actionTypes.APPLYING_FOR_LOAN_SUCCESS,
                payload: res.data.message
            })
        })
        .catch(err => {
            if (err.response.data === "Unauthorized") {
                localStorage.removeItem('token');
                dispatch({ type: actionTypes.LOGOUT })
            }
            dispatch({
                type: actionTypes.APPLYING_FOR_LOAN_FAILED,
                payload: err.response.data.error
            })
        })
}