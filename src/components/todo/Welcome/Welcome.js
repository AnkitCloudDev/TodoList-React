import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component{
    state = {
        welcomeMessage: null
    }

    handleSuccess(response){
        this.setState({welcomeMessage: response.data.message});
    }

    handleError(error)
    {
        console.log(error.response);
        
        let errorMessage = '';
        if(error.message)
        {
            errorMessage += error.message;
        }

        if(error.response && error.response.data)
        {
            errorMessage += error.response.data.message;
        }

        this.setState({welcomeMessage: errorMessage})
    }


    render(){

        return <div>   
        <h1>Welcome <strong>{this.props.match.params['name'].toUpperCase()} </strong></h1>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>

        </div> ;

    }
}

export default Welcome;