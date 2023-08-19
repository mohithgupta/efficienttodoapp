import Heading from "./components/Heading";
import "./App.css"
import Todolist from "./components/Todolist";
import Details from "./components/Details";

function App() {

  return (
    <>

      <p className="landscape">Please rotate your phone to use the app in Landscape Mode!!</p> 

      
      <div className="App">             
        
        <div> 
          <span className="portfolio-link">Made with ❤ by <a  href="https://mohithgupta.github.io" target="_blank" rel="noopener noreferrer"> Mohith Gupta </a></span>
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

    </>
  );
}

export default App;
