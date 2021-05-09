import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import AuthenticationService from '../AuthenticationService';

class AuthenticatedRoute extends Component{
    render(){

        let route = null;
        if(AuthenticationService.isUserLoggedIn())
        {
            route = <Route {...this.props}/>;
        }
        else {
           route = <Redirect to="/login"/>;
        }
        return route;
        
    }

}

export default AuthenticatedRoute;