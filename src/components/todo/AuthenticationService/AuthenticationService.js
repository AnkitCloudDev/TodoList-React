import  { Component } from 'react'
import axios from 'axios';
import {BASE_URL} from '../../../Constants';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'auth_user';
export const JWT_TOKEN = ""
class AuthenticationService extends Component{


    createJwtToken(token)
    {
        return 'Bearer ' + token;
    }


    executeJWTAuthenticationService(username,password)
    {
        return axios.post(`${BASE_URL}/authenticate`,{ username,password});
    }

    registerSuccessfulLoginForJwt(username,token)
    {
        console.log(token);
        sessionStorage.setItem('auth_user',username);
        this.setupAxiosInterceptor(this.createJwtToken(token));
        
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    getUserName(){
        const user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log("Username="+user);
        if(user === null)
        {
            return '';
        }
        return user;
    }

    isUserLoggedIn(){
        const user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null)
       {
            return false;
        }
        return true;
    }

    setupAxiosInterceptor(token)
    {  
        console.log(token);
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn())
                {
                    config.headers.authorization = token
                }
                return config;
            }
        )

    }

}

export default new AuthenticationService();