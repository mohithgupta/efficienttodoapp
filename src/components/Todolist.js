import React, {useState, useEffect} from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Todolist.css"
import axios from 'axios';

const endpoint = "https://krat.es/3b999ff229cd56baf75b/";

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

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit} style={flex}> 
    <Form.Group style={{width:"60%"}}>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add a new task" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Add
    </Button>
  </Form>
  );
}

export const Todolist = (props) => {

  const [todos, setTodos] = useState([
    // Each todo has the following properties 

    // id : "unique_id" - id is recieved only when fetched, so fetchData is required in all other functions
    // text : "task"
    // isDone : boolean value
  ])

  const addTodo = async (text) => {

    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    await axios.post(endpoint + `${props.title}`, {text, isDone:false})
    console.log("Added :", text)
    
    fetchData();
  };

  const markTodo = async (id, index, text) => {

    const newTodos = [...todos]
    newTodos[index].isDone= (newTodos[index].isDone ? (newTodos[index].isDone===true ? false : true) : true);
    setTodos(newTodos);

    const bool = newTodos[index].isDone;
    await axios.put(endpoint + `${id}`, {text, isDone:bool});
    console.log("updated :", text)
   
    fetchData();
  };

  const removeTodo = async (id, index, text) => {
    
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    await axios.delete(endpoint + `record/${id}`);
    console.log("deleted :", text)

    fetchData();
  };

  const fetchData = async () => {
    
    const res = await axios.get(endpoint + `${props.title}`)

    if(res.status!==200) throw Error("Something's wrong")
    else setTodos(res.data);

    console.log("fetched", res.data)
  }

  useEffect( () => {
    
    fetchData();
  }, [])

  return (
    <div className="app">
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div onChange={props.onChange}>
          { todos ? todos.map((todo, index) => (
            <Todo
                id={todo._id}
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
            />
          )) 
          
          :
          
            ""
          }
        </div>
      </div>
    </div>
  );
}

export default Todolist;