import { useState } from 'react';
import './App.css';
import TodoContext from './createStore';
import Router from './Router';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
      <TodoContext.Provider value={{todoList, setTodoList}}>
         <Router></Router>
      </TodoContext.Provider>
      </div>
      </div>
    </div>
  );
}

export default App;
