import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Todolist.css"
import axios from 'axios';
import useLocalStorage from "use-local-storage";
import FormTodo from "./FormTodo";
import Todo from "./Todo";
import useInterval from "./useInterval"


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

    if(customId!=='absent'){
     
      try {
          await axios.post(endpoint + `${props.title}`, {text, isDone:false}) 
      }
      catch(error){
          console.log(error)
          alert("The API has an issue but it would be temporary. Please try again after some time or use the Continue with No ID option for now!")
      }
      finally{
          fetchData()
      }
    }
    else{
      const newTodos = [{text }, ...todos];
      setTodos(newTodos);
    }
    console.log("Added :", text)
    
  };

  const markTodo = async (id, index, text) => {

    let newTodos = [...todos]
    newTodos[index].isDone= (newTodos[index].isDone ? (newTodos[index].isDone===true ? false : true) : true);
    const bool = newTodos[index].isDone;
   

    if(customId!=='absent'){
     
      try{
          await axios.put(endpoint + `${id}`, {text, isDone:bool})
      }
      catch(error){
          console.log(error)
          alert("The API has an issue but it would be temporary. Please try again after some time or use the Continue with No ID option for now!")
      }
      finally{
          fetchData()
      }
    }
    else{
        setTodos(newTodos);
    }
   
    console.log("updated :", text)

  };

  const removeTodo = async (id, index, text) => {
    
    
    if(customId!=='absent'){
      try {
        await axios.delete(endpoint + `record/${id}`) 
      }
      catch(error){
        console.log(error)
        alert("The API has an issue but it would be temporary. Please try again after some time or use the Continue with No ID option for now!")
      }
      finally{
        fetchData()
      }
    }
    else {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

    console.log("deleted :", text)
  };

  const fetchData = async () => {

    if(customId!=='absent'){
      try {
        const res = await axios.get(endpoint + `${props.title}`)

        if(res.status!==200) throw Error("Something's wrong")
      
        const data = res.data;
    
        data.reverse();
    
        setTodos(data)

        console.log("fetched")
      }
      catch(error){
        console.log(error)
        alert("The API has an issue but it would be temporary. Please try again after some time or use the Continue with No ID option for now!")
      }
      finally{ }
    }
  }

  // useInterval( () => customId!=='absent' && fetchData(), 1000)

  useEffect(() => {
    fetchData()
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