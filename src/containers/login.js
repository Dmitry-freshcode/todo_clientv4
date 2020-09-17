import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './login.module.css'
import LoginForm from '../components/login/LoginForm'


class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.loginform}>
              <LoginForm />
          </div>        
      </div>
    )
  }
}

Login.defaultProps = {
    //user: null,
 }
 
 Login.propTypes = {
     //setUserData: PropTypes.func.isRequired,
 }
 
 const mapStateToProps = store => ({
     //user: store.user,
 });
 
 const mapDispatchToProps = dispatch => ({
    // setUserData: data => dispatch(setUser(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Login);
