import 'bootstrap/dist/css/bootstrap.min.css';
import "./Todolist.css"
import useLocalStorage from "use-local-storage";
import InputForTodo from "./InputForTodo";
import Todo from "./Todo";

const Todolist = (props) => {

  const [todos, setTodos] = useLocalStorage(`${props.title}`, [

    // {text : "string", isDone : boolean}
  ]) 

  const addTodo = (text) => {

      const newTodos = [{text }, ...todos];
      setTodos(newTodos);
  };

  const markTodo = (index) => {

    let newTodos = [...todos];

    newTodos[index].isDone = (newTodos[index].isDone ? (newTodos[index].isDone===true ? false : true) : true);   

    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    
      const newTodos = [...todos];

      newTodos.splice(index, 1);

      setTodos(newTodos);
  };

  return (
    <div className="todolist">
      <span class="tasks_counter">{todos.length}</span>
      <div className="container">
        <InputForTodo addTodo={addTodo} />
        <div onChange={props.onChange}>
          { todos ? todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
            />
          )) 
          
          :
          
            "Loading..."
          }
        </div>
      </div>
    </div>
  );
}

export default Todolist;