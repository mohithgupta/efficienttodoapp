import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Todolist.css"
import axios from 'axios';
import useLocalStorage from "use-local-storage";
import FormTodo from "./FormTodo";
import Todo from "./Todo";


const Todolist = (props) => {

  const customId = props.customId;

  const endpoint = customId!=='absent' ? process.env.REACT_APP_BASEURL + customId + "/" : null;

  const [todos, setTodos] = useLocalStorage(`${props.title}`, [
    // Each todo has the following properties 

    // id will be absent when using no ID option
    // id : "unique_id" - id is recieved only when fetched, so fetchData is required in all other functions
    // text : "task"
    // isDone : boolean value
  ]) 

  const addTodo = async (text) => {

    const newTodos = [{text }, ...todos];
    setTodos(newTodos);

    customId!=='absent' && (await axios.post(endpoint + `${props.title}`, {text, isDone:false}) )
    console.log("Added :", text)
    
    customId!=='absent' && fetchData();
  };

  const markTodo = async (id, index, text) => {

    let newTodos = [...todos]
    newTodos[index].isDone= (newTodos[index].isDone ? (newTodos[index].isDone===true ? false : true) : true);
    const bool = newTodos[index].isDone;
   
    setTodos(newTodos);

    customId!=='absent' && (await axios.put(endpoint + `${id}`, {text, isDone:bool}) )
    console.log("updated :", text)

    customId!=='absent' && fetchData();
  };

  const removeTodo = async (id, index, text) => {
    
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    customId!=='absent' && (await axios.delete(endpoint + `record/${id}`) )
    console.log("deleted :", text)

    customId!=='absent' && fetchData();
  };

  const fetchData = async () => {
    
    const res = await axios.get(endpoint + `${props.title}`)

    if(res.status!==200) throw Error("Something's wrong")
  
    const data = res.data;

    data.reverse();

    setTodos(data)

    console.log("fetched", data)
  }

  useEffect( () => {
    
    customId!=='absent' && fetchData();

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