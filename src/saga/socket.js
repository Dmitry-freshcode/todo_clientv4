import { 
  take,
  put,
  call, 
 fork
 } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { createWebSocketConnection } from '../api/socket'
import {INCOMING_REFRESH} from '../constants/socket'
import { 
  TASKS_GET,
} from '../constants/tasks'

function createSocketChannel(socket) {

  return eventChannel(emit => {
    const refreshHandler = () => {  
      emit('')
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

function* reloadTasks(){
  yield put({type: TASKS_GET});  
}

export function* watchOnRefresh() { 
  const socket = yield createWebSocketConnection;
  const socketChannel = yield call(createSocketChannel, socket)

  while (true) {
    try {     
      const payload = yield take(socketChannel)
      yield put({ type: INCOMING_REFRESH, payload })
      yield fork(reloadTasks);     
     
    } catch(err) {
      console.error('socket error:', err)      
    }
  }
}