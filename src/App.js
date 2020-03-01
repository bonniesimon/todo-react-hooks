import React, { useState } from 'react';
import './App.css';


/**
 * *<Todo/> Component
 */
const Todo = ({todo,index,completeTodo,deleteTodo}) => {
  return(
  <div className="todo" style = {{textDecoration:todo.isCompleted?"line-through":""}}>
    {todo.text}
    <div>
    <button className = "btn btn-complete" onClick = {() => completeTodo(index) }>Completed</button>
    <button className = "btn btn-delete" onClick = {() => deleteTodo(index) }>X</button>
    </div>
  </div>

  )
}

/**
 * *<TodoForm/> Component
 */
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
        placeholder="Type todo here"
        value = {value}
        className = "input"
        onChange = {e => setValue(e.target.value)}
        />
    </form>
  )
}

/**
 * *<App/> Component
 */
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

  const deleteTodo = deleteIndex => {
    let newTodos = [...todos];
    newTodos = newTodos.filter(item => { 
      if(item != newTodos[deleteIndex]){
        return item;
      }
    })
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
            deleteTodo = {deleteTodo}
          />
        ))}
        <TodoForm addTodo = {addTodo} />
      </div> 
    </div>
  );
}

export default App;
