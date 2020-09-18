import React, { Component } from 'react'
import styles from './Login.module.css'

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    };
  }

  changeName = (event) => { 
    this.setState({
       username: event.target.value,      
      });   
  };

  changePassword = (event) => {    
    this.setState({
      password: event.target.value,      
    });    
  };

  render() {
    const {username,password} = this.state;    
    return (          
      <>        
        <div className={styles.loginBody}>
            <input type="text" value={this.state.username} placeholder="login" onChange={this.changeName}/>
            <input type="password" value={password} placeholder="password" onChange={this.changePassword}/>
            <button 
            className={styles.loginButton} 
            onClick={()=>{this.props.callBack(username,password);this.setState({username:'',password:''})}}>{this.props.name}</button>   
            <span></span>         
        </div>
      </>
    )
  }
}
