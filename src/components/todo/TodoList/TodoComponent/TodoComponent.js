import React, { Component } from 'react';
import moment from 'moment';
import {Formik} from 'formik';
class TodoComponent extends Component{
    state = {
        id: this.props.match.params.id,
        description: '',
        targetDate: moment(new Date()).format('YYYY-MM-DD'),

    }
    render(){
        return <div>
            <h1>The Id of this Todo task is {this.props.match.params.id}</h1>
            <div className="container">
                <Formik></Formik>
            </div>
        </div>;
    }
}

export default TodoComponent;