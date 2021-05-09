import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class HeaderComponent extends Component{
    render(){
        return <div>
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href= '/' className="navbar-brand">TodoApp</a></div>
                <ul className="navbar-nav">
                    <li className="nav-link" > <Link to="/welcome/ankit">Home</Link> </li>
                    <li className="nav-link" ><Link to="/todos">Todos</Link>  </li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to="/login">Login</Link>  </li>
                    <li className="nav-link"><Link to="/logout">Logout</Link>  </li>
                </ul>
            </nav>
           
        </div>
    }
}

export default HeaderComponent;