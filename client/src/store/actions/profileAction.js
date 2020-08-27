import * as actionTypes from '../actionTypes';
import axios from '../../axios-api';



export const updateProfile = formData => dispatch => {
    console.log('Form data from', formData);
    axios.put('/profile', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}