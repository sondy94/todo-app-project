import React, {useState} from 'react';

import  './App.css'
import Todo from './Todo';


function App() {
  const [todos,setTodos] = useState(['going for a walk', 'going to sleep']);
  const [input,setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos,input]);
    setInput('')
  }

  return (
    <div className="App">
     <h1>TODO APP</h1>
     
<Todo todos={todos} input={input} addTodo={addTodo} setInput={setInput}/>
    
    </div>
  );
}

export default App;
