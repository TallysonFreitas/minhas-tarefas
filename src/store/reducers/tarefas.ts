import { createSlice } from '@reduxjs/toolkit'

const initialState: estado = {
  tarefas: [
    {
      titulo: 'estudar programacao',
      tags: ['importante', 'pendente'],
      descricao: 'lorem'
    },
    {
      titulo: 'estudar programacao',
      tags: ['importante', 'pendente'],
      descricao: 'lorem'
    }
  ]
}

type estado = {
  tarefas: Tarefa[]
}

type Tarefa = {
  titulo: string
  tags: string[]
  descricao: string
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {}
})
