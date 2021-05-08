import React from 'react';

const welcome = (props) => {
    console.log(props.match.params['name']);
    return <div>
        <header>
            <h>Welcome <strong>{props.match.params['name'].toUpperCase()} </strong></h>
        </header>
    </div>;
}

export default welcome;