//import {store} from '../index';
import openSocket from 'socket.io-client';
//import { getTasks } from '../actions/tasks';

export const createWebSocketConnection = openSocket('http://localhost:3000');

// export const subscribeToReload = () => { 
//   socket.on('refresh',()=>{     
//     store.dispatch(getTasks())
//   });
//  }



