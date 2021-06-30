import React,{ Component } from 'react';
import './Login.css';
import AuthenticationService from '../AuthenticationService/AuthenticationService';
class Login extends Component{

    state = {
        username: '',
        password: '',
        isAuthenticated: AuthenticationService.isUserLoggedIn(),
        loginFailed: false,
    };

    usernameHandler = (event) => {
        // console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    loginHandler = () =>{
        // if(this.state.username === 'ankit' && this.state.password === 'password')
        // {
        //     // this.setState({isAuthenticated: true});
        //     // this.setState({loginFailed: false});
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
        //     this.props.history.push('/welcome/'+this.state.username);
        // } 
        // else {
        //     this.setState({loginFailed: true});
        // }

        AuthenticationService.executeJWTAuthenticationService(this.state.username,this.state.password).then(
            (response) => {
                console.log(response);
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        ).catch(
            () => {
                this.setState({loginFailed: true})
            }
        )
    }
  
    render(){
        let text = null;
        if(this.state.isAuthenticated)
        {
            text = <p className="alert alert-success">Login Successful!</p>
        }

        if(this.state.loginFailed)
        {
            text = <p className="alert alert-warning">Invalid Credentials!!</p>
        }
        
        return(
            <div className="bg">
                <h1>Sign in/ Sign up to continue</h1>
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
