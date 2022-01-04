import Heading from "./components/Heading";
import "./App.css"
import Todolist from "./components/Todolist";
import UserInput from "./components/UserInput";
import useLocalStorage from "use-local-storage";
import { confirm } from "react-confirm-box";


function App() {

  const [continueWithNoId, setContinueWithNoId] = useLocalStorage("continueWithNoId", 'no')

  const [customId, setCustomId] = useLocalStorage("customId", 'absent');
    
  const CustomConfirmBox = (message, onConfirm, onCancel) => {
    return(
      <div>
          <p> {message} </p>
          <button onClick={onConfirm}> Yes </button>
          <button onClick={onCancel}> No </button>
      </div>
    )
  }

  const customRender = {
    render: (message, onConfirm, onCancel) => {
      return (
        <CustomConfirmBox message={message} onConfirm={onConfirm} onCancel={onCancel} />
      );
    }
  };

  const handleChangeID = async (customRender)  => {  // need to change this for no ID

      const result = await confirm("Are you sure??", customRender )
      
      result && setCustomId('absent')

      result && setContinueWithNoId("no")
  }

  return (
    <>
    { (customId==='absent' && continueWithNoId==='no') ? 
    
    <UserInput setCustomId={setCustomId} setContinueWithNoId={setContinueWithNoId} /> 

    :

    <div className="App">             
       
       <p className="landscape">Please Tilt your phone to use the app in Landscape Mode for better experience !!</p> 

      <div className="changeId_div" onClick={handleChangeID}> 
      
      {/* Your Id : {customId} */}

      <button className="changeId_btn"> {continueWithNoId==='no' ? "Change" : "Enter"} My ID </button>  

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
          customId={customId}
        />
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpurg"
          customId={customId}
        />
      
      </div>

      <div className="notinput" >
        <Heading text="Not Urgent" className={["heading","heading-noturgent"].join(" ")} />     
      </div>    

      <div className="inputdiv ">
        
        <Todolist 
          title="impnoturg"
          customId={customId}
        />   
      
      </div>

      <div className="inputdiv ">
      
        <Todolist 
          title="notimpnoturg"
          customId={customId}
        />

      </div>
    
    </div>}
    </>
  );
}

export default App;
