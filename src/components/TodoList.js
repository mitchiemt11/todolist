import React from 'react'
import Todo from './Todo'
import { List } from "@material-ui/core" 


const TodoList = ({todos,toggleComplete, removeTodo}) => {
  return (
    <List>
      {todos.map(todo => (
    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      ))}
    </List>
      
  )
}

export default TodoList
