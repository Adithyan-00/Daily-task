// import {createSlice} from "@reduxjs/toolkit"

// const initial = { todos: [] }

// const todoSclice = createSlice({
//     name:'todo',
//     initialState:initial,
//     reducers:{
//         Addtodo:(state , action) =>{
//             state.todos.push({id:Date.now(),text:action.payload})
//         },
//         Delete:(state , action) =>{
//             state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
//         }
//     }
// })
// export const {Addtodo , Delete} = todoSclice.actions
// export default todoSclice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initial = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: initial,
  reducers: {
    Addtodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload
      })
    },
    Delete: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { Addtodo, Delete } = todoSlice.actions
export default todoSlice.reducer
