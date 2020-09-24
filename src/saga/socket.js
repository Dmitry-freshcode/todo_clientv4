import { 
  take,
  put,
  call, 
 fork
 } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { createWebSocketConnection } from '../api/socket'
//import {INCOMING_REFRESH} from '../constants/socket'
import { 
  TASKS_GET,
} from '../constants/tasks'



function createSocketChannel(socket) {

  return eventChannel(emit => {

    const refreshHandler = () => {      

      emit(TASKS_GET)
    }

    const errorHandler = (errorEvent) => {
  
      emit(new Error(errorEvent.reason))
    }

    socket.on('refresh', refreshHandler)
    socket.on('error', errorHandler)

    const unsubscribe = () => {
      socket.off('refresh', refreshHandler)
    }

    return unsubscribe
  })
}

function* reloadTasks(payload){
  yield put({type: payload});  
}


export function* watchOnRefresh() { 
  const socket = yield createWebSocketConnection;
  const socketChannel = yield call(createSocketChannel, socket)

  while (true) {
    try {     
      const payload = yield take(socketChannel)
      yield fork(reloadTasks,payload);     
     
    } catch(err) {
      console.error('socket error:', err)      
    }
  }


}