import { 
    TASK_CREATE,    
    TASK_UPDATE_STATE,

    FILTER_TASKS,
    TASKS_SET_CURRENT,
    TASK_DELETE,
    TASK_UPDATE,
    TASK_DELETE_ALL,
    TASK_ADD,
    TASKS_SET,
    TASKS_GET
} from '../constants/tasks';

const getTasks = (data) =>{    
    return{
        type: TASKS_GET, 
        payload: data       
    }
}

const setTasks = (data) =>{
    console.log(data)
    return{
        type: TASKS_SET, 
        payload: data       
    }
}
const addTask = (data) =>{
    return{
        type: TASK_ADD, 
        payload: data       
    }
}
const deletAllTasks = (data) =>{
    return{
        type: TASK_DELETE_ALL,               
    }
}
const updateTasks = (data) =>{
    return{
        type: TASK_UPDATE, 
        payload: data                
    }
}
const deleteTask = (data) =>{
    return{
        type: TASK_DELETE, 
        payload: data                     
    }
}
const setCurrentPage = (data) =>{
    return{
        type: TASKS_SET_CURRENT,
        payload:data,              
    }
}
const filterTasks = (data) =>{
    return{
        type: FILTER_TASKS,
        payload: data                      
    }
}
// const findTodos =() =>{    
//     return {
//         type: TODO_FIND,
//     }
// }

export {
    // addTodo,    
    // deleteTodo,
    filterTasks,
    setCurrentPage,
    deleteTask,
    updateTasks,
    deletAllTasks,
    addTask,
    setTasks,
    getTasks,
};