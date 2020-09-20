import {
    SET_USER_DATA,
    USER_LOGIN,
    SAVE_LOCAL_USER,
    LOGOUT_USER,
    ADD_USER, 
    USER_AUTOLOGIN,   
} from '../constants/user';

export const setUser = data => ({
    type: SET_USER_DATA,
    data,
})

export const loginUser = data => ({
    type: USER_LOGIN,
    data,
})

export const saveLocalUser = () => ({
    type: SAVE_LOCAL_USER,    
})

export const logoutUser = () => ({
    type: LOGOUT_USER,    
})

export const addUser = data => ({
    type: ADD_USER, 
    data,  
})

export const autologinUser = () => ({
    type: USER_AUTOLOGIN,
         
})