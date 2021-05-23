import axios from 'axios';

class TodoDataService {
    fetchTodoData(name)
    {
        const baseUrl = `http://localhost:8080/users/${name}/todos`;
        return axios.get(baseUrl);
    }

}

export default new TodoDataService();