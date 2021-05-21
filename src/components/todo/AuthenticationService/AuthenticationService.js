import  { Component } from 'react'

class AuthenticationService extends Component{
    registerSuccessfulLogin(username,password){
        console.log("Logged in Successfully");
        sessionStorage.setItem('auth_user',username);
    }

    logout(){
        sessionStorage.removeItem('auth_user');
    }

    isUserLoggedIn(){
        const user = sessionStorage.getItem('auth_user');
        if(user === null)
        return false;
        return true;
    }

}

export default new AuthenticationService();