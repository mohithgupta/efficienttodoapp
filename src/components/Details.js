import React, {useState} from 'react'
import "./Details.css"
// import axios from 'axios'
import useLocalStorage from 'use-local-storage'

export const Details = () => {
 
    return (
        <>

        {/* This Component is not in use right now */}

            <div className="user_instructions_wrapperdiv">

                <div>
                    <ul className='main_list'>
                        <li className='no_id_li'>Disclaimer: Your data will be lost when you clear browser data because the app uses local storage to store the lists.</li>
                        <li className='github_repo_link'> You can find the code in my <a href="https://github.com/mohithgupta/efficienttodoapp" target="_blank" rel="noreferrer noopener">Github Repo</a></li>
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
        </>
    )
}

export default Details;