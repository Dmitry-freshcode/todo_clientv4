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
    SET_ERRORS,
} from '../constants/error'
import {
     loginUser,
     addUser,
//     getProfile,    
 } from '../api'
 import { push } from 'react-router-redux'; 

//const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* workerLogin(payload){
    const response = yield loginUser(payload.data); 
    //console.log(response)   
    switch (response.status){
        case 201:{
            const user = response.data;
            yield put( {type: SET_USER_DATA, data:user});
            yield put( {type: SAVE_LOCAL_USER, data:user});
            yield put(push('/task'));                
            break;
        }            
        default: yield put( {type: SET_ERRORS, data:response.data});
    }           
}

export function* workerSaveLocal(payload){
    const user = payload.data;    
    yield localStorage.setItem('username',user.username);
    yield localStorage.setItem('token',user.access_token);
    yield localStorage.setItem('id',user._id);
}

export function* workerLogout(){
    yield localStorage.removeItem('username');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('id');
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

export function* workerAutologin(){
    const token = yield localStorage.getItem('token');
    if(token){
        const username = yield localStorage.getItem('username');
        const id = yield localStorage.getItem('id');
        if (token && username && id){
            console.log(token,username,id)
            yield put( {type: USER_LOGIN, data: {username,token,id}});    
        }
    }

    
}


export function* watchActionUser() {    
    yield takeEvery(USER_LOGIN, workerLogin);
    yield takeEvery(SAVE_LOCAL_USER, workerSaveLocal);
    yield takeEvery(LOGOUT_USER, workerLogout);
    yield takeEvery(ADD_USER, workerAddUser);
    yield takeEvery(USER_AUTOLOGIN,workerAutologin);
}
