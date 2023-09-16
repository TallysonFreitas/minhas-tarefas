import Tarefa from '../../components/Tarefa'
import { BotaoNovaTarefa, Main, Pesquisa } from './styles'
import { useSelector } from 'react-redux/es/exports'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const state = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Main>
      <Pesquisa>
        2 tarefas marcadas como:&quot;categoria&quot; e &quot;termo&quot;
      </Pesquisa>
      <ul>
        {state.tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              descricao={tarefa.descricao}
              id={tarefa.id}
              titulo={tarefa.titulo}
              status={tarefa.status}
              prioridade={tarefa.prioridade}
            />
          </li>
        ))}
      </ul>
      <BotaoNovaTarefa />
    </Main>
  )
}

export default ListaDeTarefas
