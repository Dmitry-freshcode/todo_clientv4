import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';

import Login from '../containers/login';
import AddUser from '../containers/addUser';
import Tasks from '../containers/tasks';

export default class MainRouter extends Component {

    render() {
        return (            
            <Router history={history}>    
                <Switch>
                    
                    <Route path="/add" component={AddUser} />
                    <Route path="/tasks" component={Tasks} />
                    <Route exact path="/" component={Login}/>
                    
                </Switch>
            </Router>
        );
    }
}