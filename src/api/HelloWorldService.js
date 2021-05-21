import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService()
    {
        const baseUrl = 'http://localhost:8080';
        return axios.get(baseUrl);
    }
}

export default new HelloWorldService();