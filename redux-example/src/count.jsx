import React from 'react'
import { useSelector , useDispatch } from 'react-redux'



function Count() {

    const value = useSelector((state)=>{
        return state.one.value;
    })
    console.log(value);
    
    const dispatch = useDispatch()


  return (
    <div>
      <h1>THIS IS A COUNTER PAGE</h1>

      <div style={{display:"flex",alignItems:'center',gap:'20px'}}>
        <button onClick={()=> dispatch({type:'increament'})}>+</button>
        <h3>{value}</h3>
        <button onClick={()=> dispatch({type: 'decreament'})}>-</button>
      </div>
    </div>
  )
}

export default Count
