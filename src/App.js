import React, { useState } from 'react';
import './App.css';

const Todo = ({todo}) => {
  return(
  <div className="todo">{todo.text}</div>
  )
}


const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return ;
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input 
        type="text"
        value = {value}
        onChange = {e => setValue(e.target.value)}
        className = "input"
        />
    </form>
  )
}


function App() {
  const [todos, setTodos] = useState([
    {text: "Meet linda maam"},
    {text: "Learn React"},
    {text : "Learn Photoshop"}
  ]);


  const addTodo = (value) => {
    const newTodos = [...todos,{text:value}];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key = {index}
            index = {index}
            todo = {todo}
          />
        ))}
        <TodoForm addTodo = {addTodo} />
      </div> 
    </div>
  );
}

export default App;
