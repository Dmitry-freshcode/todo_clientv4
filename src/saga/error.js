import { takeEvery, put } from 'redux-saga/effects';
import {
    SET_ERRORS,
    ERASE_ERRORS
} from '../constants/error'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function* workerSetError(){
    yield delay(2000);
    yield put( {type: ERASE_ERRORS});
}


export function* watchActionError() {    
    yield takeEvery(SET_ERRORS, workerSetError);
  
}
