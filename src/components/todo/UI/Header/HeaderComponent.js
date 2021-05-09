import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AuthenticationService from '../../AuthenticationService/AuthenticationService';
class HeaderComponent extends Component{

    render(){
        let isAuth = AuthenticationService.isUserLoggedIn();
        let welcomeLinks = null;
        // let logout = null;
        if(isAuth)
        {
            welcomeLinks =   <ul className="navbar-nav">
            <li > <Link to="/welcome/ankit" className="nav-link">Home</Link> </li>
            <li ><Link to="/todos" className="nav-link">Todos</Link>  </li>
        </ul>;
      

        }
        return <div>
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href= '/' className="navbar-brand">TodoApp</a></div>
                <ul className="navbar-nav">
   { isAuth &&        <li > <Link to="/welcome/ankit" className="nav-link">Home</Link> </li>}
    { isAuth &&        <li ><Link to="/todos" className="nav-link">Todos</Link>  </li>}
        </ul>;
      
                <ul className="navbar-nav navbar-collapse justify-content-end">
                  { !isAuth && <li ><Link to="/login" className="nav-link">Login</Link>  </li> }
                    {isAuth && <li ><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link>  </li>}
                </ul>
            </nav>
           
        </div>
    }
}

export default HeaderComponent;