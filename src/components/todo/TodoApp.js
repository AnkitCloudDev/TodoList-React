import React, { Component } from 'react';
import Login from './Login/Login';
import Welcome from './Welcome/Welcome';
import {Route, Switch} from 'react-router-dom';
import TodoList from './TodoList/TodoList';
import './TodoApp.css';
// import { Router,Route, Switch} from 'react-router-dom';

class TodoApp extends Component{
    render()
    {
        return( 
        <div >
            {/* <LoginComponent/> */}

                <Switch>
                <Route path="/login" component={Login} /> 
                <Route path="/welcome/:name" component={Welcome} />
                <Route path="/todos" component={TodoList} />
                <Route path="/" exact component={Login}></Route> 
                <Route render={() => <div><h>Sorry the path you are trying to access does'nt exists</h>
                <br></br>
                <a href="/">Click Here to goto the home page</a>
                </div>}/>
                </Switch>
           
                
                    
        </div>);
    }
}

export default TodoApp;