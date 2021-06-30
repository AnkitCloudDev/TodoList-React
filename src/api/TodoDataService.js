import axios from 'axios';
import {BASE_URL} from '../Constants';
class TodoDataService {
    fetchTodoData(name)
    {
        
        const getTodo = `${BASE_URL}/users/${name}/todos`;
        console.log(getTodo)
        return axios.get(getTodo);
    }

    deleteTodo(name,id)
    {
        return axios.delete(`${BASE_URL}/users/${name}/todos/${id}`);
       
    }

    retrieveSingleTodo(name,id)
    { 
        return axios.get(`${BASE_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name,id,todo)
    {
        return axios.put(`${BASE_URL}/users/${name}/todos/${id}`,todo);
    }

    createTodo(name,todo)
    {
        console.log(`${BASE_URL}/users/${name}/todos`);
        return axios.post(`${BASE_URL}/users/${name}/todos`,todo);
    }



}

export default new TodoDataService();