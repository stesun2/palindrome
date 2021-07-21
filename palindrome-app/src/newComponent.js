import { useState } from 'react'

// A function accepts 'props' containing the paramaters "T/F" which renders the text in different color corresponding to 'Yes' or 'No'
const NewComponent = (props) => {

    const displayMessage = () => {
        console.log(props)
        if (props.palindrome === true) {
          return <h1 className="output"> Yes </h1>
        }
        else {
          return <h1 className="output1"> No </h1>
        }
      }
      
    return (
        <div>
            { displayMessage() }
        </div>
    )  
}

export default NewComponent;
