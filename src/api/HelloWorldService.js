import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService(name)
    {
      
        const baseUrl = `http://localhost:8080/hello-world-bean/${name}`;
        return axios.get(baseUrl);
    }
}

export default new HelloWorldService();