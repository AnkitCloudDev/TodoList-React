import React, { Component } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import {Route, Switch} from 'react-router-dom';
import TodoList from './TodoList/TodoList';
import './TodoApp.css';
import HeaderComponent from './UI/Header/HeaderComponent';
import FooterComponent from './UI/Footer/FooterComponent';
import Logout from './Logout/Logout';
import AuthenticatedRoute from './AuthenticationService/AuthenticatedRoute/AuthenticatedRoute';
import TodoComponent from './TodoList/TodoComponent/TodoComponent';

// import { Router,Route, Switch} from 'react-router-dom';

class TodoApp extends Component{
    render()
    {
        return( 
        <div >
            {/* <LoginComponent/> */}
                <HeaderComponent/>
                <Switch>
                <Route path="/login" component={Login} /> 
                <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                <AuthenticatedRoute path="/todos" component={TodoList} />
                <AuthenticatedRoute path="/logout" component={Logout} />
              
                <AuthenticatedRoute path="/" exact component={Login}/>
                <AuthenticatedRoute render={() => <div><h>Sorry the path you are trying to access does'nt exists</h>
                <br></br>
                <a href="/">Click Here to goto the home page</a>
                </div>}/>
                </Switch>
                <FooterComponent/>
           
                
                    
        </div>);
    }
}

export default TodoApp;