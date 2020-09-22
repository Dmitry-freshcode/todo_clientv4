import React, { Component } from 'react'
import { connect } from 'react-redux';
import {logoutUser} from '../actions/user';
import styles from './tasks.module.css'
import Header from '../components/Header'
import {getTasks} from '../actions/tasks'
import  TaskList  from '../components/TaskList'
import Footer from '../components/Footer'

class Tasks extends Component {

  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    return (
      <div  className={styles.wrapper}>
        <Header />
        <TaskList />        
        <Footer />            
      </div>
    )
  }
}


Tasks.defaultProps = {
    
 }
 
 Tasks.propTypes = {
     
 }
 
 const mapStateToProps = store => ({
    
 });
 
 const mapDispatchToProps = dispatch => ({
    logoutUser: data => dispatch(logoutUser()),
    getTasks: () => dispatch(getTasks()),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
