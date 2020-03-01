import React, { useState } from 'react';
import './App.css';

const Todo = ({todo,index,completeTodo}) => {
  return(
  <div className="todo" style = {{textDecoration:todo.isCompleted?"line-through":""}}>
    {todo.text}
    <div>
    <button className = "btn-complete" onClick = {() => completeTodo(index) }>Completed</button>
    </div>
  </div>

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
    {
      text: "Learn React",
      isCompleted:false
    },
    {
      text: "JS to meet me",
      isCompleted:false
    },
    {
      text : "Learn Photoshop",
      isCompleted:false
    }
  ]);


  const addTodo = (value) => {
    const newTodos = [...todos,{text:value}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted){
      newTodos[index].isCompleted = false;
    }else{
      newTodos[index].isCompleted = true;
    }
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
            completeTodo = {completeTodo}
          />
        ))}
        <TodoForm addTodo = {addTodo} />
      </div> 
    </div>
  );
}

export default App;
