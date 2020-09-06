import * as actionTypes from '../actionTypes';

const initialState = {
    applying: false,
    error: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APPLYING_FOR_LOAN:
            return {
                ...state,
                applying: true,
                error: false,
                message: ''
            }
        case actionTypes.APPLYING_FOR_LOAN_SUCCESS:
            return {
                ...state,
                applying: false,
                message: action.payload,
            }
        case actionTypes.APPLYING_FOR_LOAN_FAILED:
            return {
                ...state,
                applying: false,
                message: "Loan application not successful"
            }
        default:
            return state;
    }
}

export default reducer;