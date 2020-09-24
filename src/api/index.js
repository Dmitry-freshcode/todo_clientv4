import axios from 'axios';
import {store} from '../index';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  });

export const loginUser = async (data) =>{    
  try{
    const response = await API.post('/auth/login',{
      username: data.username,
      password: data.password      
    })      
    return response; 
  }
   catch(e){        
     return e.response;
 }          
}

export const addUser = async (data) =>{    
  try{      
    const response = await API.post('/users/add',{
      username: data.username,
      password: data.password      
    });     
    return response; 
  }catch(e){       
    return e.response;
  }          
}

export const getProfile = async (data) =>{ 
  try{    
    const response = await API.get('/users/profile',{headers:{
      Authorization: `Bearer ${data}`
    }
  });    
    return response; 
  }catch(e){       
    return e;
  }          
}
export const getTasks = async () =>{   
  try{      
    const _id = store.getState().user._id;
    const token = store.getState().user.access_token;      
    let currentPage = localStorage.getItem('currentPage');    
    const filter = store.getState().tasks.filter; 
    if(_id && token && currentPage){
      const response = await API.get('/todo/find/all',
      {
        headers: {
            "Authorization": `Bearer ${token}`
        } ,
         params:{ 
          username : _id,
          page: currentPage,
          filter:filter,
        }        
      })    
      return response;
    }

  
  }catch(e){  
    console.log(e);     
    return e;
  }          
}

export const addTodo = async (todo) =>{    
  try{    
    const username = store.getState().user._id;
    const token = store.getState().user.access_token;    
    const response = await API.post('/todo/add',{
           name: todo.name,
           userId: username,           
           state: false,
           dueDate: todo.dueDate,
         },{headers:{
      Authorization: `Bearer ${token}`
  }
  }); 

    return response; 
  }catch(e){       
    return e;
  }          
}

export const updateTask = (query)  =>{
  const token = store.getState().user.access_token;  
    const response = API.patch('/todo/state/update',{
      query
    },
    {
      headers: {'Authorization': `Bearer ${token}`}      
    });
    return response;
}


export const deleteTask = async(id) =>{ 
  const token = store.getState().user.access_token;         
    API.post('/todo/delete',{ _id:id},{      
        headers: {'Authorization': `Bearer ${token}`}
    });
}

export const google = async() =>{           
    const response = API.post('/auth/google',{
      header:{
        
      }
    }
  
    );
    return response;
}





