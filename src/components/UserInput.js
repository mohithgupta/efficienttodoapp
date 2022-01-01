import React, {useState} from 'react'
import "./UserInput.css"
import axios from 'axios'

export const UserInput = (props) => {

    const [value, setValue] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pattern= "^[a-zA-Z0-9]*$";
        if(!value || !value.match(pattern) || value.length!==20){
            alert("ID should only consist of alphabets (can be both uppercase and lowercase) & numbers, and the length should be exactly 20 !!")
            return;
        }
        props.setCustomId(value)
        sendKaratID();
        setValue("");
    }

    const sendKaratID = async () => {
        await axios.post(process.env.REACT_APP_KRATEIDS, value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="userInput" > 
            
                <div className="input_customid_div" >
                    <div class="input_wrapper">

                    <input 
                        type="text"
                        value={props.value}
                        className="input_customid"  
                        onChange={(e)=>setValue(e.target.value)} 
                        maxlength='20' 
                        placeholder="Enter Your Custom ID"
                    />

                    </div>
                    
                    <input type="submit" className="input_submit" value="Connect My ID"/> 
                </div>

                    {/* Instructions for User */}

                    <div class="user_instructions_wrapperdiv">

                        <div>
                            <ul className='main_list'>
                                <li> You must provide a custom ID :</li>
                                <ul>
                                    <li>Length must be equal to 20</li>
                                    <li>Can have Uppercase and Lowercase alphabets </li>
                                    <li>Can contain Numbers</li>
                                    <li>No symbols, no spaces, no special characters, nothing!</li>
                                </ul>
                                <li> The sole purpose of the ID is to create and connect to a unique database</li>
                                <li> The app remembers the ID but make sure to note it down, just in case the cache memory and cookies are all deleted (OR) if you want to use the app in other device but with the same data</li>
                                <li> A button is provided on the top left inside the app to change the ID, if required (You can visit this instructions page with the same)</li> 
                                <li> Even if you lose your ID, you can contact me <a href="https://twitter.com/tobeawebdev" target="_blank" rel="noreferrer noopener">@tobeawebdev</a> on Twitter (OR) at <a href="mailto:mohithguptak@gmail.com" target="_blank" rel="noreferrer noopener">mohithguptak@gmail.com</a>, and I'll try to recover it </li><br />
                                <li> Note : In the future, I will be adding an option to use this app without the need to provide the ID and the data, obviously, will not be synched across devices, 
                                Please be aware of the fact that if you use this option, the data may be lost when you clear the cache memory and/or the cookies.</li>
                            </ul>
                        </div>

                    </div>
            
            </form>
        </div>
    )
}

export default UserInput;