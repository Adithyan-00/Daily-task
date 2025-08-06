// import {configureStore} from '@reduxjs/toolkit'
// import todoReducer from './reduce'

// const store = configureStore({
//     reducer:{
//         todos:todoReducer,
//     }
// })
// export default store

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reduce'

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})

export default store
