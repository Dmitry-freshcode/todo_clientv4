import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return (
      <div>
        
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
    // setUserData: data => dispatch(setUser(data)),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
