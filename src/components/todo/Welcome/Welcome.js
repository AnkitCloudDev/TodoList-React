import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Welcome extends Component{
    
    retrieveWelcomeMessage = () => {
        console.log("Button Clicked");
    }


    render(){
        return <div>   
        <h1>Welcome <strong>{this.props.match.params['name'].toUpperCase()} </strong></h1>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>

        <h1>Click here to get a customized Welcome Message</h1>
        <button onClick={this.retrieveWelcomeMessage} >Click Here</button>
        <div className="container">
        <p>You can manage your todos <Link to="/todos">here</Link></p>
        </div>  
        </div> ;

    }
}

export default Welcome;