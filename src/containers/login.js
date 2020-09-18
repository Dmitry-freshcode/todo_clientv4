import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './login.module.css'
import LoginForm from '../components/login/LoginForm'
//import LoginAddUser from '../components/login/LoginAddUser'
import {loginUser,addUser} from '../actions/user'
import classNames from 'classnames';

class Login extends Component {
  constructor(){
    super();
    this.state={      
      isSignIn:true,
    }
  }

  signState = () =>{
    this.setState({
      isSignIn: !this.state.isSignIn
    })
  }

  login = (username,password) =>{
    const data = {
      username,
      password,
    }   
    this.props.loginUser(data);
  }

  

  addUser =(username,password)=>{
    console.log('component put')
    const data = {
      username,
      password,      
    }
    this.setState({
      isSignIn:true,
    })     
    this.props.addUser(data);

  }

  render() {
    let isAddError = false,
        isLoginError= false,
        isAddSuccess = false;

    if(this.props.error.isError){
      switch (this.props.error.errorData.message){
        case('Unauthorized'):{
          isLoginError = true; 
          break;
        }
        case('user is Exist'):{
          isAddError = true; 
          break;
        }  
        case('user created'):{
          isAddSuccess = true; 
          break;
        }      
        default:;
      }
    }
   
    const isSignIn = this.state.isSignIn;
    return (      
      <div className={styles.container}>
          <div className={styles.loginform}>
            <div className={styles.header}>
              <p className={classNames(styles.sign, { [styles.active]: isSignIn===true })} onClick={!isSignIn?this.signState:null}>Sign in</p>
              <span></span>
              <p className={classNames(styles.sign, { [styles.active]: isSignIn===false })} onClick={isSignIn?this.signState:null}>Sign up</p>
            </div>
            {isSignIn?<LoginForm name='sign in' callBack={this.login}/>:<LoginForm name='sign up' callBack={this.addUser}/>}           
          </div> 

          <div className={classNames(styles.loginError, {[styles.active]:isLoginError})}>Wrong username or password</div> 
          <div className={classNames(styles.addError, {[styles.active]: isAddError})}>Username is exist</div>  
          <div className={classNames(styles.addSuccess, { [styles.active]: isAddSuccess })}>User add</div>     
      </div>
    )
  }
}

Login.defaultProps = {
    error: {
      isError:false,
      errorData:{}
    },
 }
 
 Login.propTypes = {
  error: PropTypes.object.isRequired,
 }
 
 const mapStateToProps = store => ({
     error: store.error,
 });
 
 const mapDispatchToProps = dispatch => ({    
    loginUser: data => dispatch(loginUser(data)),
    addUser: data => dispatch(addUser(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Login);
