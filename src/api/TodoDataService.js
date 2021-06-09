import axios from 'axios';

class TodoDataService {
    fetchTodoData(name)
    {
        const baseUrl = `http://localhost:8080/users/${name}/todos`;
        return axios.get(baseUrl);
    }

    deleteTodo(name,id)
    {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
       
    }

    retrieveSingleTodo(name,id)
    { 
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }



}

export default new TodoDataService();