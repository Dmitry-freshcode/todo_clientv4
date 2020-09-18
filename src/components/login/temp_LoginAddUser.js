import React, { Component } from 'react'
import styles from './Login.module.css'

export default class LoginAddUser extends Component {

  render() {
    return (
      <>       
        <div className={styles.loginBody}>
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password"/>
              <button className={styles.loginButton}>{this.props.name}</button>
            <span></span>
        </div>
      </>
    )
  }
}
