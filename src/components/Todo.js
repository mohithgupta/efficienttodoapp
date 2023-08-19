import { Button } from 'react-bootstrap';

const flex={
  display :"flex",
  justifyContent:"space-around",
  margin:"5px",
}

const Todo = ({ todo, index, markTodo, removeTodo  }) => {

  const handleUpdate = () => markTodo(index)

  const handleDelete = () => removeTodo(index)

  return (
      <div style={flex} >
        <span 
          style={{ textDecoration: todo.isDone ? "line-through" : "", color: todo.isDone ? "#777" : "#fff"}}
        >
          {todo.text}
        </span>
        <div>
          <Button className="btn" style={{margin:"3px"}} variant="outline-success" onClick={handleUpdate}>{todo.isDone ? '⟳' : "✓" }</Button>
          {' '}
          <Button className="btn" variant="outline-danger" onClick={handleDelete}> ✕ </Button>
        </div>
      </div>
    );
}

export default Todo;
