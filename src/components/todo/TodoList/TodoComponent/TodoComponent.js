import React, { Component } from 'react';
import moment from 'moment';
import {ErrorMessage, Field, Form, Formik} from 'formik';
class TodoComponent extends Component{
    state = {
        id: this.props.match.params.id,
        description: 'Learn Angular',
        targetDate: moment(new Date()).format('YYYY-MM-DD'),

    }

    onSubmit(values){
        console.log(values);
    }

    validate(values){
        console.log(values);
        let errors = {};
        if(!values.description)
        {
            errors.description = 'Enter a description'
        }
        else if(values.description.length < 8)
        {
            errors.description = 'Description should contain atleast 8 characters'
        }


        if(!moment(values.targetDate).isValid)
        {
            errors.targetDate = 'Enter a valid Date'
        }

        return errors;
    }

    render(){
        let description = this.state.description;
        let targetDate = this.state.targetDate;

        return <div>
            
            <h1>The Id of this Todo task is {this.props.match.params.id}</h1>
            <div className="container">
                <Formik initialValues={{
                    description,
                    targetDate,
                }} 
                onSubmit={this.onSubmit}
                validate={this.validate}
                >
                    {
                        (props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className = "form-control" type="text" name="description"></Field>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className = "form-control" type="date" name="targetDate"></Field>
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>

                        </Form>
                    )
                    }
                </Formik>
            </div>
        </div>;
    }
}

export default TodoComponent;