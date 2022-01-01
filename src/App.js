import Heading from "./components/Heading";
import "./App.css"
import Todolist from "./components/Todolist";
import UserInput from "./components/UserInput";
import useLocalStorage from "use-local-storage";

function App() {

  const [customId, setCustomId] = useLocalStorage("customId", 'absent');

  const handleChangeID = () => {

    setCustomId('absent')
  }

  return (
    <>
    { customId==='absent' ? 
    
    <UserInput setCustomId={setCustomId} /> 

    :

    <div className="App"> 
            
       
       <p className="landscape">Please Tilt your phone to use the app in Landscape Mode for better experience !!</p> 

      <div className="changeId_div" onClick={handleChangeID}> 
      
      {/* Your Id : {customId} */}

      <button className="changeId_btn"> Change My ID </button>  

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
          customUserId={customId}
        />
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpurg"
          customUserId={customId}
        />
      
      </div>

      <div className="notinput" >
        <Heading text="Not Urgent" className={["heading","heading-noturgent"].join(" ")} />     
      </div>    

      <div className="inputdiv ">
        
        <Todolist 
          title="impnoturg"
          customUserId={customId}
        />   
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpnoturg"
          customUserId={customId}
        />

      </div>
    
    </div>}
    </>
  );
}

export default App;
