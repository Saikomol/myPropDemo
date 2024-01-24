//import { useState } from 'react'

import './App.css'
import Button from './Button';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>This is my Button APP</h1>
       <h2>Simple Login form</h2>
       <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />       
        <Button buttonText={"Login"}/>
       </form>
       <h2>Simple Registration form</h2>
       <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />       
        <Button buttonText={"Register"}/>
       </form>

      </div>
    </>
  )
}

export default App
