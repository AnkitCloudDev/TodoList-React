import React from 'react';
import {Link} from 'react-router-dom';
const welcome = (props) => {
    console.log(props.match.params['name']);
    return <div>
        <header>
            <h>Welcome <strong>{props.match.params['name'].toUpperCase()} </strong></h>
            <p>You can manage your todos <Link to="/todos">here</Link></p>

        </header>
    </div>;
}

export default welcome;