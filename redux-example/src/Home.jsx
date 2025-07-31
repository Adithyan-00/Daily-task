import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'



function Home() {

    const value = useSelector((e)=>{
        return e.one.value 
    })

    const Add = useSelector((e)=>{
        return e.last.value
    })

    const dispatch = useDispatch()

  return (
    <>
    <div>
      <h1>Helloo</h1>

      <h2>YOUR COUNT IS : {value}</h2>



      <NavLink to='count'><button>Click to count page</button></NavLink>
      <NavLink to='count5'><button>click to go 5 multiple</button></NavLink>
      <NavLink to='data' ><button>Datas</button></NavLink>
    </div>

    <div>
        <button onClick={()=> dispatch({type : "ADD"})}>+</button>
        <h1> HELLO : {Add}</h1>
    </div>

    </>
    
  )
}

export default Home
