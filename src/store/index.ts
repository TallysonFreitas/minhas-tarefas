import { configureStore } from '@reduxjs/toolkit'
import tarefaSlice from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefaSlice
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
