import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: estado = {
  tarefas: [
    {
      titulo: 'Estudar Programacao',
      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 1,
      status: 'concluida',
      prioridade: 'normal'
    },
    {
      titulo: 'Arrumar Quarto',

      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 2,
      status: 'pendente',
      prioridade: 'normal'
    },
    {
      titulo: 'Arrumar Quarto',
      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 3,
      status: 'concluida',
      prioridade: 'urgente'
    },
    {
      titulo: 'Arrumar Quarto',
      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 4,
      status: 'pendente',
      prioridade: 'importante'
    },
    {
      titulo: 'Arrumar Quarto',
      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 5,
      status: 'concluida',
      prioridade: 'urgente'
    },
    {
      titulo: 'Arrumar Quarto',
      descricao:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, fugit amet eius optio velit, consequuntur laboriosam qui ea fuga.',
      id: 6,
      status: 'pendente',
      prioridade: 'importante'
    }
  ]
}

type estado = {
  tarefas: TarefaType[]
}

export type TarefaType = {
  titulo: string
  descricao: string
  id: number
  status: string
  prioridade: string
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<TarefaType>) => {
      state.tarefas = [...state.tarefas, action.payload]
    },
    remover: (state, action: PayloadAction<TarefaType>) => {
      state.tarefas = state.tarefas.filter(
        (item) => item.id !== action.payload.id
      )
    },
    salvar: (state, action: PayloadAction<TarefaType>) => {
      state.tarefas = state.tarefas.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      )
    }
  }
})

export const { adicionar, remover, salvar } = tarefaSlice.actions
export default tarefaSlice.reducer
