
// import React, { useState } from 'react'
// import { Addtodo , Delete } from './reduce'
// import {useSelector , useDispatch} from 'react-redux'

// function Todo() {
//     const dispath = useDispatch()
//     const [text , setText] = useState('')

//     const todos = useSelector((state)=> state.todos.todos)
     
//     console.log(todos);
    

//     const HandleButt = () =>{
//         if(text.trim() !==''){
//             dispath(Addtodo(text))
//             setText('')
//         }
//     }

//     const DeleteButt = (id) =>{
//         dispath(Delete(id))
//     }


//   return (
//     <div>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
//       <button onClick={HandleButt}></button>


//       <ul>
//         {todos.map((todo , index)=>(
//             <li key={index}>{todo.text}
//                 <button onClick={()=>DeleteButt(id)}>Remove</button>
//             </li>
//         ) )}
//       </ul>
//     </div>
//   )
// }

// export default Todo


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addtodo, Delete } from './reduce'

function Todo() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const todos = useSelector((state) => state.todos.todos)

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(Addtodo(text))
      setText('')
    }
  }

  const handleDelete = (id) => {
    dispatch(Delete(id))
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
