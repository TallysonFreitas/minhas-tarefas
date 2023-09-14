import {
  BarraAcoes,
  Botao,
  Card,
  Descricao,
  Informacoes,
  Tag,
  Titulo
} from './style'

const Tarefa = () => {
  return (
    <Card>
      <Informacoes>
        <Titulo>Estudar Programacao</Titulo>
        <div>
          <Tag>importante</Tag>
          <Tag>pendente</Tag>
        </div>
        <Descricao>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quod
          nobis doloribus porro dolores velit incidunt aut a quo ducimus?
        </Descricao>
      </Informacoes>
      <BarraAcoes>
        <Botao>Editar</Botao>
        <Botao>Remover</Botao>
      </BarraAcoes>
    </Card>
  )
}

export default Tarefa
