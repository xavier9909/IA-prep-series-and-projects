import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios"
export const UseEffect = () => {
    const [data,setdata] = useState("")
    const [count,setcount] = useState(0)
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
         console.log(res);
         setdata(res.data[0].email)

  })
}, [count])

  return (
    <div>
<h1>UseEffect</h1>
<button onClick={()=>{setcount(count+1)}} >increment  </button> : {count +" - "}
     {data}
    </div>
  )
}
