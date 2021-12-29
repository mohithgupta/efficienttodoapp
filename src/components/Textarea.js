import React from 'react'

export const Textarea = (props) => {
  // these local storages are to be used in App.j for "if used textarea. Extra: Embed the local storage in textarea.js itself
  // const [impurg, setImpurg] = useLocalStorage("impurg", "");
  // const [notimpurg, setNotimpurg] = useLocalStorage("notimpurg", "");
  // const [impnoturg, setImpnoturg] = useLocalStorage("impnoturg", "");
  // const [notimpnoturg, setNotimpnoturg] = useLocalStorage("notimpnoturg", "");

    return (
        <textarea
          type="text"
          className={props.className}
          onChange={props.onChange}
          value={props.value}
        >
          
        </textarea>
    )
}
export default Textarea;