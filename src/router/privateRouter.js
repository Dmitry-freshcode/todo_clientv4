
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { isLogin } from '../utils';

const PrivateRoute = ({component: Component,auth, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            auth ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;