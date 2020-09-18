import {
    SET_ERRORS, 
    ERASE_ERRORS,  
} from '../constants/error';

export const setError = data => ({
    type: SET_ERRORS,
    data,
})

export const eraseError = data => ({
    type: ERASE_ERRORS,
    data,
})

