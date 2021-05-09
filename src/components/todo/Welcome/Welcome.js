import React from 'react';
import {Link} from 'react-router-dom';
const welcome = (props) => {
    console.log(props.match.params['name']);
    return <div>
    
            <h1>Welcome <strong>{props.match.params['name'].toUpperCase()} </strong></h1>
            <div className="container">
            <p>You can manage your todos <Link to="/todos">here</Link></p>
            </div>
            

      
    </div>;
}

export default welcome;