import {
    INCOMING_REFRESH   
} from '../constants/socket';

const initialState = {};

const socketReducer = (state = initialState, action) => {    
    switch (action.type) {        
        case INCOMING_REFRESH:            
            return state;        
        default:
            return state;
    }
}

export default socketReducer;