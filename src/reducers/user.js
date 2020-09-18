import {
    SET_USER_DATA,
    USER_LOGIN,
    SAVE_LOCAL_USER,
    LOGOUT_USER,
    ADD_USER,  
    USER_AUTOLOGIN,
} from '../constants/user';

const initialState = null;

const userReducer = (state = initialState, action) => {    
    switch (action.type) {  
        case USER_AUTOLOGIN:                      
            return state;     
        case USER_LOGIN:            
            return state;
        case ADD_USER:
            return state;
        case SAVE_LOCAL_USER:            
            return state; 
        case LOGOUT_USER:
            return {}       
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export default userReducer;