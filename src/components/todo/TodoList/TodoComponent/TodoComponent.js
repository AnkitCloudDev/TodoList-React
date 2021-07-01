import React, { Component } from 'react';
import moment from 'moment';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import TodoDataService from '../../../../api/TodoDataService';
import AuthenticationService from '../../AuthenticationService/AuthenticationService';
class TodoComponent extends Component{

    state = {
        id: this.props.match.params.id,
        description: ' ',
        targetDate: moment(new Date()).format('YYYY-MM-DD'),

    }

    onSubmit=(values)=>{
        console.log("On submit called");
        console.log(values);
        let username = AuthenticationService.getUserName();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        console.log("Username in onsubmit is"+username);
       

        if(this.state.id === -1 )
        {
            TodoDataService.createTodo(username,todo).then( () =>  this.props.history.push('/'));
        }
        else    
        {        
        console.log(values);
        console.log("Inside On Submit");
        console.log('This Props:');
        console.log(this.props)
        TodoDataService.updateTodo( username, this.state.id ,todo).then( () =>  this.props.history.push('/todos') )}
    }

    updateState(description,targetDate)
    {
        this.setState({
            description: description,
            targetDate: targetDate
        })
    }

    componentDidMount(){
        console.log(this.props.match);

        if(this.state.id === -1)
        {
            return;
        }

        let username = AuthenticationService.getUserName();

         TodoDataService.retrieveSingleTodo(username,this.state.id).then(
            response => {
              console.log(response.data.description);
              this.updateState(response.data.description, moment(response.data.targetDate).format('YYYY-MM-DD'))
                this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            },()=>console.log("Finished"))
        }
        );
    }

    validate(values){

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
            
            <h1>Todo</h1>
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
                            <button className="btn btn-success" type="submit" onSubmit = {(values)=>this.onSubmit(values)}>Save</button>

                        </Form>
                    )
                    }
                </Formik>
            </div>
        </div>;
    }
}

export default TodoComponent;