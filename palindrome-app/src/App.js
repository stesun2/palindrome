import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import NewComponent from './newComponent';


function App() {
  // useState Function that updates and renders with any changes in the background
  const [isPalindrome, setIsPalindrome] = useState(false);

  // Function which checks the text if it is a Palindrome.
  const handleTextInput = (event) => {
    console.log(event)
    let word = event.target.value
    let reversed = ""

    // Appending text starting from the end
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]
    }

    // Passing a boolean to isPalindrome
    console.log(reversed)
    if (reversed === word) {
      console.log('it is a palindrome')
      setIsPalindrome(true)
    } 
    else {
      console.log('Is not a palindrome')
      setIsPalindrome(false)
    }

  }


  // Created a new component called 'NewComponent' which will change the change the text color 
  return (
    <div className="App">
        <h1>Is it a Palindrome?</h1>
        <input onChange={ handleTextInput } type="text" id="palindrome-input" />
        <NewComponent palindrome={ isPalindrome }/> 

    </div>
  );
}

export default App;
