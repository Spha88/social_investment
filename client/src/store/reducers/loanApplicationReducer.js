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
                message: action.payload.message,
            }
        case actionTypes.APPLYING_FOR_LOAN_FAILED:
            return {
                ...state,
                applying: false,
                message: action.payload.message
            }

        default:
            return state;
    }
}

export default reducer;