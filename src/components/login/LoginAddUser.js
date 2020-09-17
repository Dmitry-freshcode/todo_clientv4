import React, { Component } from 'react'
import styles from './Login.module.css'

export default class LoginAddUser extends Component {
  render() {
    return (
      <>
        <div className={styles.header}>            
            <p className={styles.sign}>Sign in</p>
            <span></span>
            <p className={styles.sign}>Sign up</p>
        </div>
        <div className={styles.loginBody}>
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password"/>
            <button className={styles.loginButton}>sign up</button>
            <span></span>
        </div>
      </>
    )
  }
}
