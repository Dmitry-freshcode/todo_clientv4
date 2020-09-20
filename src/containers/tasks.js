import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../actions/user';
import styles from './tasks.module.css'
import Header from '../components/Tasks/Header'
import {getTasks} from '../actions/tasks'
import  TaskList  from '../components/Tasks/TaskList'
import Footer from '../components/Tasks/Footer'


class Tasks extends Component {

  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    return (
      <div  className={styles.wrapper}>
        <Header />
        <TaskList />
        {<Footer /> }    
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
    getTasks: () => dispatch(getTasks()),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
