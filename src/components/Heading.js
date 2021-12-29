import React from 'react'

export const Heading = (props) => {
    return (
        <p className={props.className}>
           {props.text} 
        </p>
    )
}

export default Heading;