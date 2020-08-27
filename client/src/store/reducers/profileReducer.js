import * as actionTypes from '../actionTypes';

const initialState = {
    profile: '',
    updating: false,
    updateError: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATING:
            return {
                ...state,
                updating: true,
                updateError: ''
            }
        case actionTypes.UPDATE_SUCCESS:
            // Stope updating, clear updateError and populate profile data
            return {
                ...state,
                updating: false,
                updateError: '',
                profile: action.payload
            }
        case actionTypes.UPDATE_FAILED:
            return {
                ...state,
                updating: false,
                updateError: action.payload
            }
        default:
            return state;
    }
}

export default reducer;