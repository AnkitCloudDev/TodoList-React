import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp';
import {BrowserRouter} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TodoApp></TodoApp>
      </BrowserRouter>
    
     
    
     
    </div>
  );
}

export default App;
