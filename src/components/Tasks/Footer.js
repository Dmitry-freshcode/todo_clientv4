import React, { Component } from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setCurrentPage} from '../../actions/tasks';

class Footer extends Component {
    setCurrentPage = (index) =>{    
      this.props.setCurrentPage(index);
    }

  render() {
    const indexs = [...Array(this.props.tasks.pages)].map((elem,index)=>index+1);    
    const mapIndexs = indexs.map((index,i)=>{
        const style = classNames({[styles.active]:index===this.props.tasks.currentPage})
        return <p key={i} className={style} onClick={()=>{this.setCurrentPage(index)}}>{index}</p>})
    return (
        <div className={styles.pagination}>
          {mapIndexs}
        </div>
    )
  }
}

Footer.defaultProps = {    
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
    Footer.propTypes = {
  
  tasks:PropTypes.object.isRequired,
 }
 
 const mapStateToProps = store => ({    
     tasks:store.tasks,
 });
 
 const mapDispatchToProps = dispatch => ({  
    setCurrentPage: data=>dispatch(setCurrentPage(data)),   
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Footer);
