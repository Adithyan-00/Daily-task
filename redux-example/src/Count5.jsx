
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

function Count5() {

    const value = useSelector((val)=>{
       return val.two.value
    })

    const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=> dispatch({type:"INCREAMENT"})}>+</button>
      <h1>{value}</h1>
      <button onClick={()=> dispatch({type:"DECREAMENT"})}>-</button>
    </div>
  )
}

export default Count5
