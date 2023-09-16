import { TarefaType, remover, salvar } from '../../store/reducers/tarefas'
import {
  BarraAcoes,
  BotaoCancelarRemover,
  BotaoEditar,
  BotaoSalvar,
  Card,
  ContainerTitulo,
  Descricao,
  Informacoes,
  Tag,
  Titulo
} from './style'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const Tarefa = (tarefa: TarefaType) => {
  const [editando, setEditando] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

  const dispatch = useDispatch()

  const handleClickChangeEdit = () => {
    setEditando(!editando)
  }

  const handleClickRemove = () => {
    dispatch(remover(tarefa))
  }

  const handleClickSalvar = () => {
    dispatch(salvar(tarefa)), setEditando(!editando)
  }

  const handleClickCheckedTask = () => {
    setFinalizado(!finalizado)
  }

  return (
    <Card key={tarefa.id}>
      <Informacoes>
        <ContainerTitulo>
          <input type="checkbox" onClick={handleClickCheckedTask} />
          <Titulo final={finalizado}>
            {editando && <em>Editando: </em>}
            {tarefa.titulo}
          </Titulo>
        </ContainerTitulo>
        <div>
          <Tag status={tarefa.status}>{tarefa.status}</Tag>
          <Tag prioridade={tarefa.prioridade}>{tarefa.prioridade}</Tag>
        </div>
        <Descricao disabled={!editando} defaultValue={tarefa.descricao} />
      </Informacoes>
      <BarraAcoes>
        {editando == true ? (
          <>
            <BotaoSalvar onClick={handleClickSalvar}>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={handleClickChangeEdit}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <BotaoEditar onClick={handleClickChangeEdit}>Editar</BotaoEditar>
            <BotaoCancelarRemover onClick={handleClickRemove}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Tarefa
