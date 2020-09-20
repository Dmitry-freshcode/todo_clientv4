import React, { Component } from 'react'
import { mdiLogoutVariant } from '@mdi/js';
import Icon from '@mdi/react'
import styles from './Header.module.css';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/user';
import {addTask} from '../../actions/tasks'


class Header extends Component {
    constructor(){
        super();
        this.state={
            newDate:'',
            newTask:'',

        }
    }


    logout =()=>{
        this.props.logoutUser();

    }
    changeDate=(event)=>{
            this.setState({
                newDate: event.target.value,
            })
    }
    changeTask= (event) => { 
        this.setState({
           newTask: event.target.value,           
          });   
      };
    onAdd=()=>{        
        this.props.addTask({dueDate:this.state.newDate, name:this.state.newTask});
        this.setState({
            newTask:''
        })
      }


  render() {
      const {username} = this.props.user;
      const {tasksAll,tasksComplete,tasksNoCompleted,filter} = this.props.tasks;
    return (
        <div className={styles.header}>        
            <div className={styles.userContainer}>
                    <p>Hi, {username}</p>
                    <Icon path={mdiLogoutVariant}
                        title="User Profile"
                        size={1}                                              
                        color="white"
                        onClick={this.logout}
                        />
            </div>       
            <div className={styles.newContainer}>
                    <input className={styles.date} type="date" value="2020-05-01" onChange={this.changeDate}/>
                    <input className={styles.textInput} value={this.state.newTask} type="text" placeholder="new task" onChange={this.changeTask}/>
                    <button className={styles.add} onClick={this.onAdd}>add</button>
            </div>
                
            <div className={styles.statusContainer}>
                <p>all tasks: {tasksAll}</p>
                <p>completed: {tasksComplete}</p>
                <p>not completed: {tasksNoCompleted}</p>
            </div>  

         
        </div>
    )
  }
}

Header.defaultProps = {
    user: {
        isLogin:false,
        username:"",
        _id:"",
        access_token:"",},
    tasks:{
        tasks:[],
        currentPage:1,
        pages:1,
        tasksAll:0,
        tasksComplete:0,
        tasksNoCompleted:0,
        filter:"all",
    }
    }
 Header.propTypes = {
  //error: PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  tasks:PropTypes.object.isRequired,
 }
 
 const mapStateToProps = store => ({
     user: store.user,
     tasks:store.tasks,
 });
 
 const mapDispatchToProps = dispatch => ({    
    logoutUser: data => dispatch(logoutUser()),
    addTask: data => dispatch(addTask(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Header);