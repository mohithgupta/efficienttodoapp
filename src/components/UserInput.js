import React, {useState} from 'react'
import "./UserInput.css"
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

export const UserInput = (props) => {

    const [value, setValue] = useState("")

    const [prevIdList, setPrevIdList] = useLocalStorage("prevIdList", [])

    const handleContinueWithNoId = async () => {

        const name = prompt("I hope you are aware that your data will not sync across devices and it cannot be restored if you delete your browser memory and cookies!! \nPlease Provide Your Good Name:")
        if (name == null || name == "") return;
        await axios.post(process.env.REACT_APP_NOIDDATA, name ? name : "unknown") 
        localStorage.customId && localStorage.removeItem("customId")    
        props.setContinueWithNoId(name)   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pattern= "^[a-zA-Z0-9]*$";
        if(!value || !value.match(pattern) || value.length!==20){
            alert("ID should only consist of alphabets (can be both uppercase and lowercase) & numbers, and the length should be exactly 20 !!")
            return;
        }
        setPrevIdList(prevIdList => [...prevIdList, value])
        await axios.post(process.env.REACT_APP_KRATEIDS, value)
        props.setCustomId(value)
        setValue("");
    }
    
    const autocompleteMatch = (input) => {
        if (input == '') {
            return [];
        }
        var reg = new RegExp(input)
            return prevIdList.filter(function(term) {
                if (term.match(reg)) {
                    return term;
                }
        });
    }
    
    const showResults = (value) => {
        
        const res = document.getElementById("user_input_element");
        res.innerHTML = '';
        let list = '';
        let terms = autocompleteMatch(value);

        for (let i=0; i<terms.length; i++) 
            list += '<li>' + terms[i] + '</li>';
        
        res.innerHTML = '<ul>' + list + '</ul>';
    }

    const handleChange = (e) => {
        
        setValue(e.target.value)
        showResults()
    }

    return (
        <div>
            
            <a className="portfolio-link" href="https://mohithgupta.github.io" target="_blank" rel="noopener noreferrer">Designed By: Mohith Gupta </a>

            <form onSubmit={handleSubmit} className="userInput" autoComplete='on'> 
            
                <div className="input_customid_div" >
                    <div className="input_wrapper">

                    <input 
                        type="text"
                        id="user_input_element"
                        value={props.value}
                        className="input_customid"  
                        onChange={handleChange} 
                        maxLength='20' 
                        placeholder="Enter Your Custom ID"
                        autoComplete='on'
                    />

                    </div>
                    
                    <input type="submit" className="input_submit" value="Connect My ID"/> 

                    <div className='no_id_div'>
                        <button type="button" className="no_id_btn" onClick={handleContinueWithNoId}>Continue with no ID?</button>
                    </div>
                </div>

                    {/* Instructions for User */}

                    <div className="user_instructions_wrapperdiv">

                        <div>
                            <ul className='main_list'>
                                <li className='no_id_li'> Id feels long? You can use the "continue with no ID" option provided above, but please be aware that the data will not sync across devices 
                                    and it may be lost when you clear browser cache and/or cookies  </li>
                                <li> You must provide a custom ID :</li>
                                <ul>
                                    <li>Length must be equal to 20 - It is long to avoid the need of password while still being able to have a bit of privacy</li>
                                    <li>Can have Uppercase and Lowercase alphabets </li>
                                    <li>Can contain Numbers</li>
                                    <li>No symbols, no spaces, no special characters, nothing!</li>
                                </ul>
                                <li> The sole purpose of the ID is to create and connect to a unique database</li>
                                <li className='imp_li'> <span>Note:</span> The app remembers the ID for you but make sure to note it down just in case you would like to use the app in other device, with the same data synced 
                                    across both devices (OR) if the browser cache memory and cookies are all deleted, leading to loss of your Id</li>
                                <li> A button is provided on the top left inside the app to Change/Enter the ID, if required (You can visit this instructions page with the same)</li> 
                                <li> If you lose your ID, do not can contact me <a href="https://twitter.com/tobeawebdev" target="_blank" rel="noreferrer noopener">@tobeawebdev</a> on
                                     Twitter (OR) at <a href="mailto:mohithguptak@gmail.com" target="_blank" rel="noreferrer noopener">mohithguptak@gmail.com</a>, cause I might be able to recover it </li>
                            </ul>
                        </div>

                    </div>
                    <a href="https://www.producthunt.com/posts/an-efficient-to-do-app?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-an-efficient-to-do-app" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=325804&theme=light" 
                alt="An Efficient To Do App! - You can Prioritze your tasks for Efficiency, with this App! | Product Hunt" 
                style={{width: "250px", height: "54px"}} 
                width="250"
                height="54"/>
            </a>
            </form>
            
        </div>
    )
}

export default UserInput;