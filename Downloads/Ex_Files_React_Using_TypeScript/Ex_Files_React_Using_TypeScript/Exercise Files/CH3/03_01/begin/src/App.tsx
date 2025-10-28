import './App.css'
import Message from './Message'
import React, { useState } from "react";

const App:React.FC=()=>{
const [userName,setUserName]=useState<string>("sourav")
const[message,setMessage]=useState<string>("Have a great day")
  return (
    <div>
      <h1>Typescript is cool</h1>
      <Message name={userName} message={message}
       />
    </div>
  )
}

export default App
