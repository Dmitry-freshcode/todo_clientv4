import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../actions/user';

class Tasks extends Component {
  render() {
    return (
      <div>
        <h1>TASKS</h1>
        <button onClick={this.props.logoutUser}>LOGOUT</button>
      </div>
    )
  }
}


Tasks.defaultProps = {
    //user: null,
 }
 
 Tasks.propTypes = {
     //setUserData: PropTypes.func.isRequired,
 }
 
 const mapStateToProps = store => ({
     //user: store.user,
 });
 
 const mapDispatchToProps = dispatch => ({
    logoutUser: data => dispatch(logoutUser()),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
