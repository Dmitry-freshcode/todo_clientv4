import {
    SET_ERRORS,
    ERASE_ERRORS   
} from '../constants/error';

const initialState = {
    isError:false,
};

const errorReducer = (state = initialState, action) => {    
    switch (action.type) {        
        case SET_ERRORS:            
            return {
                ...state,
                isError:true,
                errorData: {...action.data},
            };
        case ERASE_ERRORS:            
            return {
                ...state,
                isError:false,
                errorData: {},
            };
        default:
            return state;
    }
}

export default errorReducer;