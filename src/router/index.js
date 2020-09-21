import React, { Component } from 'react';
import { 
    Router,
    Route,
    Switch,
    //Redirect
 } from 'react-router-dom';
import history from '../utils/history';
import PrivatRoute from './privateRouter';
import Login from '../containers/login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import AddUser from '../containers/addUser';
import Tasks from '../containers/tasks';
import {autologinUser} from '../actions/user'
import Home from '../containers/home'

class MainRouter extends Component {

    componentDidMount(){        
        this.props.autologinUser();
    }
   
    
    render() {               
        //const isLogin = this.props.user?true:false;   
        return (            
            <Router history={history}>    
                <Switch>   
                    <Route path="/login" component={Login}/> 
                    <Route path="/test" component={Home}/> 
                    <PrivatRoute auth={this.props.user.isLogin} path="/" component={Tasks}/>                                        
                    <Route path="*" component={Login}/>
                </Switch>
            </Router>
        );
    }
}


Login.defaultProps = {
    user: {isLogin:false},
 }
 
 Login.propTypes = {
    user: PropTypes.object.isRequired,
 }
 
 const mapStateToProps = store => ({
     user: store.user,
 });
 
 const mapDispatchToProps = dispatch => ({
    autologinUser: () => dispatch(autologinUser()),
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);