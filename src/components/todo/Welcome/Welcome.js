import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../../api/HelloWorldService';
class Welcome extends Component{
    
    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldService().then(response => console.log(response)).catch(error => console.log(error));
    }


    render(){
        return <div>   
        <h1>Welcome <strong>{this.props.match.params['name'].toUpperCase()} </strong></h1>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>

        <h1>Click here to get a customized Welcome Message</h1>
        <button onClick={this.retrieveWelcomeMessage} className="btn btn-success" >Click Here</button>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>  
        </div> ;

    }
}

export default Welcome;