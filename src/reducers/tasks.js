import { all } from 'redux-saga/effects';
import { 
    TASK_CREATE,    
    TASK_UPDATE_STATE,
	TASK_SAVE_STATE,

	FILTER_TASKS,
	TASKS_SET_CURRENT,
	TASK_DELETE,
	TASK_UPDATE,
    TASK_DELETE_ALL,
    TASK_ADD,
    TASKS_SET,
	TASKS_GET, 	
} from '../constants/tasks';


const initialState = {
	tasks:[],
	currentPage:1,
	pages:0,
	tasksAll:0,
	tasksComplete:0,
	tasksNoCompleted:0,
	filter:'all'	
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
         case TASKS_GET:			
		 	return {
				 ...state,
				 ...action.data,
				};		
		case TASKS_SET:								
			return {				
				...state,
				...action.data
			}
		case TASK_ADD:
			return state;			
			
		case TASK_DELETE_ALL:			
			return {
				tasks:[],
				currentPage:1,
				pages:0,
				tasksAll:0,
				tasksComplete:0,
				tasksNoCompleted:0,
				filter:'all'
			};
		case TASK_UPDATE:
			return state;
		case TASK_DELETE:
			return state;	
		case TASKS_SET_CURRENT:
			console.log();
			return {
				...state,
				currentPage:action.payload
			}
		case FILTER_TASKS:
			return {
				...state,
				filter:action.payload,
			};	
		// case TODO_DELETE_CURRENT:			
		// 	return {
		// 		...state,
		// 		currentPage:''
		// 	} 
		// case TODO_FIND:
		// 	return state;  
        default:
            return state;
    }
}

export default tasksReducer;