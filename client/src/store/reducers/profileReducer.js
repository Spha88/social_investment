import * as actionTypes from '../actionTypes';

const initialState = {
    profile: '',
    updating: false,
    error: '',
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATING:
            return {
                ...state,
                updating: true,
                error: false,
                message: ''
            }
        case actionTypes.UPDATE_SUCCESS:
            // Stope updating, clear message and populate profile data
            return {
                ...state,
                updating: false,
                message: 'Profile updated successfully',
                profile: action.payload
            }
        case actionTypes.UPDATE_FAILED:
            return {
                ...state,
                updating: false,
                error: true,
                message: 'Could not update profile try again later'
            }
        default:
            return state;
    }
}

export default reducer;