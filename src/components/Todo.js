import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

const flex={
  display :"flex",
  justifyContent:"space-around",
  margin:"5px",
}

const Todo = ({ todo, index, markTodo, removeTodo  }) => {

  const [updating, setUpdating] = useState(false)

  const [deleting, setDeleting] = useState(false)

  const handleUpdate = async () => {

    setUpdating(true)

    await markTodo(todo._id, index, todo.text)

    setUpdating(false)
  }

  const handleDelete = async () => {

    setDeleting(true)

    await removeTodo(todo._id, index, todo.text)

    setDeleting(false)
  }
    return (
      <div style={flex} >
        <span 
          style={{ textDecoration: todo.isDone ? "line-through" : "", color:"#fff"}}
        >
          {todo.text}
        </span>
        <div>
          <Button className="btn" style={{margin:"3px"}} variant="outline-success" onClick={handleUpdate}>{updating ? "Updating..." : !todo.isDone ? "✓" : "Restore"}</Button>
          {' '}
          <Button className="btn" variant="outline-danger" onClick={handleDelete}>{deleting ? "Deleting..." : "✕"}</Button>
        </div>
      </div>
    );
}

export default Todo;
