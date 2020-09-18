import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import LoginAddUser from '../components/login/LoginAddUser'
import styles from './login.module.css'

class AddUser extends Component {
  render() {
    return (
        <div className={styles.container}>
            <div className={styles.loginform}>
                <LoginAddUser />
            </div>        
        </div>
    )
  }
}


AddUser.defaultProps = {
    //user: null,
 }
 
 AddUser.propTypes = {
     //setUserData: PropTypes.func.isRequired,
 }
 
 const mapStateToProps = store => ({
     //user: store.user,
 });
 
 const mapDispatchToProps = dispatch => ({
    // setUserData: data => dispatch(setUser(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
