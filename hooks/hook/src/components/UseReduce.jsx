import React, { useReducer } from 'react'
const reducer = (state,action)=>{
       switch (action.type) {
        case "INC": return{count : state.count+1,showtext : !state.showtext}
        default:return state;
       }
}
export const UseReduce =() => {

    const [state,dispatch] = useReducer(reducer,{count: 0,showtext : true})
  return (
    <div>
<h1>useReducer</h1>

<button onClick={()=>{
    dispatch({type :"INC"})
}} >click</button>
{state.count}
<br/>
{state.showtext ? "i am visible":"i am internally false now"}




    </div>
  )
}
