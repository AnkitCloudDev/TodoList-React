import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../../api/HelloWorldService';
class Welcome extends Component{
    state = {
        welcomeMessage: null
    }
    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldService(this.props.match.params.name)
        .then(response => this.handleSuccess(response))
        .catch(error => this.handleError(error));
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
        let message =  <button onClick={this.retrieveWelcomeMessage} className="btn btn-success" >Click Here</button>

        if(this.state.welcomeMessage)
        {
            message = <h1>{this.state.welcomeMessage}</h1>
        }
        return <div>   
        <h1>Welcome <strong>{this.props.match.params['name'].toUpperCase()} </strong></h1>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>

        <h1>Click here to get a customized Welcome Message</h1>
       {message}
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>  
        </div> ;

    }
}

export default Welcome;