import React, { Component } from 'react'
import './TodoList.css'
class TodoList extends Component{
    state = {
        todos:[
            {
            id: 1,
            description: 'Hint',
            isDone: false,
            targetDate: new Date()
        },
        {
            id: 2,
            description: 'The 2nd Todo',
            isDone: false,
            targetDate: new Date()
        },
        {
            id: 3,
            description: 'The 3rd Todo',
            isDone: false,
            targetDate: new Date()
        },
    
    ]
       
    }
    render(){
        let todoList= this.state.todos.map( i =>{
            console.log(i);
            return <tr key={i.id}>
             
                <td>{i.description}</td>
                <td>{i.targetDate.toUTCString()}</td>
                <td>{i.isDone ? 'Yes': 'No'}</td>
            </tr>;
        } )
        return <div>
            <h1>List Todos</h1>
            <div className="container">         
            <table className="table">
                <thead>
                
                   <th>description</th>
                   <th>Target Date</th>
                   <th>Finished?</th>
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