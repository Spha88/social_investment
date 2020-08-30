import * as actionTypes from '../actionTypes';

const initialState = {
    profile: '',
    updating: false,
    error: false,
    message: '',

    fetchingProfile: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLEAN_UP:
            return {
                ...state,
                message: '',
                error: false
            }
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
        case actionTypes.FETCHING_PROFILE:
            return {
                ...state,
                fetchingProfile: true,
            }
        case actionTypes.FETCHING_PROFILE_SUCCESS:
            return {
                ...state,
                fetchingProfile: false,
                profile: action.payload
            }
        case actionTypes.FETCHING_PROFILE_FAILED:
            return {
                ...state,
                fetchingProfile: false,
                profile: '',
            }
        default:
            return state;
    }
}

export default reducer;