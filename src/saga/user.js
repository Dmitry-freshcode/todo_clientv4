import { takeEvery, put } from 'redux-saga/effects';
import { 
    USER_LOGIN,
    SET_USER_DATA,
    SAVE_LOCAL_USER,
    LOGOUT_USER,
    ADD_USER,
    USER_AUTOLOGIN,
} from '../constants/user'
import {
    TASK_DELETE_ALL
} from '../constants/tasks'
import {
    SET_ERRORS,
} from '../constants/error'
import {
     loginUser,
     addUser,
     getProfile,    
 } from '../api'
 import { push } from 'react-router-redux'; 

export function* saveUserData(user){
    //console.log(user)            
    yield put( {type: SAVE_LOCAL_USER, data:user});
    yield put( {type: SET_USER_DATA, data:user});
    yield put(push('/')); 
}

export function* workerAutologin(){
    const token = yield localStorage.getItem('token');  
    //console.log(token); 
    if(token !== 'undefined' && token !== null){
        const response = yield getProfile(token);              
        const user = {...response.data, access_token:token};        
        yield saveUserData(user)
    } 
}


export function* workerLogin(payload){    
    const response = yield loginUser(payload.data);       
    switch (response.status){
        case 201:{
            const user = {...response.data};             
            yield saveUserData(user);             
            break;
        }            
        default: yield put( {type: SET_ERRORS, data:response.data});
    }           
}


export function* workerSaveLocal(payload){
    const user = payload.data;    
    //console.log(user);
    yield localStorage.setItem('username',user.username);
    yield localStorage.setItem('token',user.access_token);
    yield localStorage.setItem('_id',user._id);
    yield localStorage.setItem('currentPage',user.currentPage || 1);
}


export function* workerLogout(){
    yield localStorage.removeItem('username');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('_id');
    yield localStorage.removeItem('currentPage');
    yield put( {type: TASK_DELETE_ALL});
    yield put(push('/'));
}

export function* workerAddUser(payload){
    //console.log(payload);
    const response = yield addUser(payload.data); 
    //console.log(response);  
    switch (response.status){
        case 201:{
            //const user = response.data;
            yield put( {type: SET_ERRORS, data:response.data});            
            yield put(push('/'));                
            break;
        }            
        default: yield put( {type: SET_ERRORS, data:response.data});
    }
}

export function* watchActionUser() {    
    yield takeEvery(USER_LOGIN, workerLogin);
    yield takeEvery(SAVE_LOCAL_USER, workerSaveLocal);
    yield takeEvery(LOGOUT_USER, workerLogout);
    yield takeEvery(ADD_USER, workerAddUser);
    yield takeEvery(USER_AUTOLOGIN,workerAutologin);    
}
