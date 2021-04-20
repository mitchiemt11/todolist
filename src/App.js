import './App.css';
import Typography from "@material-ui/core/Typography"
import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos) {
      setTodos(storageTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos) )
  }, [todos]);

//add todo
function addTodo (todo) {
  setTodos([todo, ...todos])
}
function toggleComplete(id) {
  setTodos(
    todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      
      return todo;
    })
  )
}
function removeTodo (id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
console.log(todos)


  return (
    <div className="App">
        <Typography style={{padding : 16}}variant="h2">
          Todolist
        </Typography>
       <TodoForm addTodo={addTodo} />
       <TodoList 
          todos={todos}
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
