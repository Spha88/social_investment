import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';

export const applyForLoan = (amount, period) => dispatch => {
    dispatch({ type: actionTypes.APPLYING_FOR_LOAN });

    axios.post('/loans', { amount: amount, term: period })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: actionTypes.APPLYING_FOR_LOAN_SUCCESS,
                payload: res.data.message
            })
        })
        .catch(err => {
            if (err.response.data === "Unauthorized") {
                localStorage.removeItem('token');
                return dispatch({ type: actionTypes.LOGOUT })
            }
            dispatch({
                type: actionTypes.APPLYING_FOR_LOAN_FAILED,
                payload: err.response.data.error
            })
        })
}