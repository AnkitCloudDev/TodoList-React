import React,{ Component } from 'react';
import './Login.css';
class Login extends Component{

    state = {
        username: '',
        password: '',
        isAuthenticated: false,
        loginFailed: false,
    };

    usernameHandler = (event) => {
        // console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    loginHandler = () =>{
        if(this.state.username === 'ankit' && this.state.password === 'password')
        {
            console.log("Logged In");
            this.setState({isAuthenticated: true});
            this.setState({loginFailed: false});
        } 
        else {
            this.setState({loginFailed: true});
        }
    }
  
    render(){
        let text = null;
        if(this.state.isAuthenticated)
        {
            text = <p>Login Successful!</p>
        }

        if(this.state.loginFailed)
        {
            text = <p>Invalid Credentials!!</p>
        }
        
        return(<div>
            {text}
            <div className="LoginPage" method="post">           
                User Name: <br></br><input type="text" name="username" placeholder="Enter user name" onChange={this.usernameHandler}/>
                <br></br>Password: <br></br><input type="password" name="password"placeholder="Enter password" onChange={this.usernameHandler}/>
                <br></br><button onClick={this.loginHandler}>Login</button>
           
            </div> 

        </div>);
    }

}

export default Login;
