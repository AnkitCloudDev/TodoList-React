import React, { Component } from 'react';
import Login from './Login/Login';
import './TodoApp.css';
import { Router,Route, Switch} from 'react-router-dom';

class TodoApp extends Component{
    render()
    {
        return( 
        <div >
            {/* <LoginComponent/> */}

     <Router>
                <>
                <Route path="/login" component={Login} > </Route>
                </>

     </Router>
 
      {/* <Route path="/welcome" exact component=""> </Route> */}
      {/* </Switch> */}
                  
        </div>);
    }
}

export default TodoApp;