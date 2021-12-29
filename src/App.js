import Heading from "./components/Heading";
import "./App.css"
// import useLocalStorage from "use-local-storage";
// import Textarea from "./components/Textarea";
import Todolist from "./components/Todolist";
import { useState, useEffect } from "react";

import {sendData} from "./components/Todolist" 

function App() {

  // const [dataToSend, setdataToSend] = useState([])

  return (
    <div className="App"> 
      
      <p className="landscape">Please Tilt your phone to use the app in Landscape Mode for better experience !!</p>

      <div>
        {/* <button className="savebtn">Save Data</button> */}
      </div>
     
      <div className="notinput" >
     
        <Heading text="Important" className={["heading","heading-important"].join(" ")} />
     
      </div>      
     
      <div className="notinput" >
     
        <Heading text="Not Important" className={["heading","heading-notimportant"].join(" ")} /> 
     
      </div>
      
      <div className="notinput" >
     
        <Heading text="Urgent" className={["heading","heading-urgent"].join(" ")}/>
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="impurg"
        />
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpurg"
        />
      
      </div>

      <div className="notinput" >
        <Heading text="Not Urgent" className={["heading","heading-noturgent"].join(" ")} />     
      
      </div>    

      <div className="inputdiv ">
        
        <Todolist 
          title="impnoturg"
        />   
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpnoturg"
        />

      </div>
    
    </div>
  );
}

export default App;
