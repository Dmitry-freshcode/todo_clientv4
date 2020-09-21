import { takeEvery, put } from 'redux-saga/effects';
import {   
    FILTER_TASKS,
    TASKS_SET_CURRENT,
    TASK_DELETE,
    TASK_UPDATE,
    TASK_ADD,
    TASKS_SET, 
    TASKS_GET,
} from '../constants/tasks'
import {      
    getTasks,
    addTodo,
    updateTask,
    deleteTask,
} from '../api'

export function* workerGetTasks(){
    const response = yield getTasks();      
    yield put( {type: TASKS_SET, data:response.data});
}

export function* workerAddTask(data){    
    yield addTodo(data.payload);    
    //yield put( {type: TASKS_GET});
}

export function* workerUpdateTask(query){    
    yield updateTask(query.payload);   
    //yield put( {type: TASKS_GET});
}

export function* workerDeleteTask(query){    
    yield deleteTask(query.payload);    
    //yield put( {type: TASKS_GET});
}

export function* workerSetCurrent(index){        
    yield localStorage.setItem('currentPage',index.payload);
    yield put( {type: TASKS_GET});

}
export function* workerFilterTasks(data){    
    yield localStorage.setItem('filter',data.payload);
    yield put( {type: TASKS_GET,data:data.payload});
}


export function* watchActionTasks() {    
    yield takeEvery(TASKS_GET, workerGetTasks);
    yield takeEvery(TASK_ADD ,workerAddTask);
    yield takeEvery(TASK_UPDATE ,workerUpdateTask);
    yield takeEvery(TASK_DELETE ,workerDeleteTask);    
    yield takeEvery(TASKS_SET_CURRENT,workerSetCurrent);  
    yield takeEvery(FILTER_TASKS, workerFilterTasks);    
}
