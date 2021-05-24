import React, { Component } from 'react';
import TodoDataService from '../../../api/TodoDataService';
import './TodoList.css'
import AuthenticationService from '../AuthenticationService/AuthenticationService';
class TodoList extends Component{
    state = {
        todos:[
        //     {
        //     id: 1,
        //     description: 'Hint',
        //     isDone: false,
        //     targetDate: new Date()
        // },
        // {
        //     id: 2,
        //     description: 'The 2nd Todo',
        //     isDone: false,
        //     targetDate: new Date()
        // },
        // {
        //     id: 3,
        //     description: 'The 3rd Todo',
        //     isDone: false,
        //     targetDate: new Date()
        // },
    
    ],
    message: null
       
    }
    componentDidMount(){
            console.log("CDM CALL");
            this.refreshTodos();
    }
    deleteTodoList = (id)=>{
        let username = AuthenticationService.getUserName();
        TodoDataService.deleteTodo(username,id).then(
                response =>
          {  this.refreshTodos();
            //   console.log(response);
            //   if(response.status === 200)
            //    {
            //       this.setState({message: `Deletion of Todo${id} Successful`});
                  
            //    }
            //    else 
            //     {
            //          this.setState({message: `Deletion of Todo${id} Failed`})
                    
            //     }
               
        }
            
        ).catch(
            error => console.log(error)
        );

    }

    refreshTodos(){
        TodoDataService.fetchTodoData(AuthenticationService.getUserName()).then(response => 
            this.setState({todos: response.data})
        ).catch(error => console.log(error));
    }

    render(){

        let todoList= this.state.todos.map( i =>{
            console.log(i);
            return <tr key={i.id}>
                <td>{i.description}</td>
                <td>{i.targetDate}</td>
                <td>{i.isDone ? 'Yes': 'No'}</td>
                <td><button className="btn btn-warning" onClick={()=>this.deleteTodoList(i.id)}>DELETE</button></td>
            </tr>;
        } );

   

        return <div>
            <h1>List Todos</h1>
            <div className="container">
               {this.state.message != null ? <div className="alert alert-success">{this.state.message}</div> : null  }      
            <table className="table">
                <thead>
                
                   <th>description</th>
                   <th>Target Date</th>
                   <th>Finished?</th>
                   <th>Delete</th>
                </thead>
                <tbody>
                 {todoList}
                </tbody>
            </table>
            </div>
        </div>;
    }
}

export default TodoList;