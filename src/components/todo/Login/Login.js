import React,{ Component } from 'react';
import './Login.css';
class Login extends Component{

    state = {
        username: '',
        password: '',
    };

    usernameHandler = () => {

    }
    render(){
        return(<div>
            <div className="LoginPage">
            <form className="Login">
                User Name: <input type="text" name="username" placeholder="Enter user name" onChange={this.usernameHandler}/>
                Password: <input type="password" name="password"placeholder="Enter password"/>
                <button type="submit" >Login</button>
            </form>
            </div> 

        </div>);
    }

}

export default Login;
