import {store} from '../index';
import openSocket from 'socket.io-client';
import { getTasks } from '../actions/tasks';

const socket = openSocket('http://localhost:3000');

export const subscribeToLogin = () => { 
  socket.on('refresh',()=>{     
    store.dispatch(getTasks())
  });
 }



