import React, { useState } from 'react'

export const UseState = () => {
    const [counter,setcounter] = useState(0)
    const [inputvlaue,setvalue] = useState("")
    const Onchange = (e)=>{
          setvalue(e.target.value)
    }
  return (
    <div>
    <h1>useState</h1>
    {counter}
    <button onClick={()=>{setcounter(counter+1)}}  >increment</button>
    <br/>
    <input onChange={((e)=>{Onchange(e)})} />
    {inputvlaue}
    </div>
  )
}
