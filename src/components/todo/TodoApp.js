import React, { Component } from 'react';
import LoginComponent from './Login/Login';
import './TodoApp.css';
class TodoApp extends Component{
    render()
    {
        return( 
        <div >
            <LoginComponent/>
                  
        </div>);
    }
}

export default TodoApp;