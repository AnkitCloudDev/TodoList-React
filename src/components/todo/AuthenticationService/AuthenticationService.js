import  { Component } from 'react'
import axios from 'axios';
class AuthenticationService extends Component{
    registerSuccessfulLogin(username,password){
        let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`)
        console.log("Logged in Successfully");
        sessionStorage.setItem('auth_user',username);
        this.setupAxiosInterceptor(basicAuthHeader);
    }

    logout(){
        sessionStorage.removeItem('auth_user');
    }

    getUserName(){
        const user = sessionStorage.getItem('auth_user');
        console.log("Username="+user);
        if(user === null)
        {
            return '';
        }
        return user;
    }

    isUserLoggedIn(){
        const user = sessionStorage.getItem('auth_user');
        if(user === null)
        return false;
        return true;
    }

    setupAxiosInterceptor(basicAuthHeader)
    {  
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn())
                {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )

    }

}

export default new AuthenticationService();