import React, { Component } from 'react'
import './TodoList.css'
class TodoList extends Component{
    state = {
        id: 1,
        description: 'Hint'
    }
    render(){

        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                   <th>id</th>
                   <th>description</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.id}</td>
                        <td>{this.state.description}</td>
                    </tr>
                    <tr>
                        <td>{this.state.id}</td>
                        <td>{this.state.description}</td>
                    </tr>
                    <tr>
                        <td>{this.state.id}</td>
                        <td>{this.state.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>;
    }
}

export default TodoList;