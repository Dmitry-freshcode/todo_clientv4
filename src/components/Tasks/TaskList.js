import React, { Component } from 'react'
import styles from './TaskList.module.css'
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { format} from 'date-fns';
import { updateTasks,deleteTask} from '../../actions/tasks';

class TaskList extends Component {

    updateState = (id,state) =>{       
        this.props.updateTasks({_id:id, state: state});
    }
    delTask = (id) =>{
        this.props.deleteTask(id);
    }

  render() {          
    
      const {tasks} = this.props.tasks;
      const mapTasks = tasks.map((task,i) =>{
        const style =  classNames(styles.task, {[styles.through]: task.state})
      return   <li key={i} className={styles.listItem}>
                    <div className={styles.date}>{format(new Date(task.dueDate),'yyyy-MM-dd')}</div>
                    <div className={style} onClick={()=>this.updateState(task._id, task.state)}>{task.name}</div>
                    <button onClick={()=>this.delTask(task._id)}>delete</button>
                </li> 
      })


    return (
      <div className={styles.taskList}>
          <ul>
                {mapTasks}
          </ul>        
      </div>
    )
  }
}

TaskList.defaultProps = {    
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
    TaskList.propTypes = {
  //error: PropTypes.object.isRequired,
  //user:PropTypes.object.isRequired,
  tasks:PropTypes.object.isRequired,
 }
 
 const mapStateToProps = store => ({
     //user: store.user,
     tasks:store.tasks,
 });
 
 const mapDispatchToProps = dispatch => ({    
    //logoutUser: data => dispatch(logoutUser()),
    updateTasks: (data) => dispatch(updateTasks(data)),
    deleteTask: (data) => dispatch(deleteTask(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

