import React from 'react'
import { Button } from 'react-bootstrap';

const flex={
  display :"flex",
  justifyContent:"space-around",
  margin:"5px",
}

const Todo = ({ todo, index, markTodo, removeTodo }) => {

    return (
      <div style={flex} >
        <span 
          style={{ textDecoration: todo.isDone ? "line-through" : "", color:"#fff"}}
        >
          {todo.text}
        </span>
        <div>
          <Button className="btn" style={{margin:"3px"}} variant="outline-success" onClick={() => markTodo(todo._id, index, todo.text)}>{!todo.isDone ? "✓" : "Restore"}</Button>{' '}
          <Button className="btn" variant="outline-danger" onClick={() => removeTodo(todo._id, index, todo.text)}>✕</Button>
        </div>
      </div>
    );
}

export default Todo;
