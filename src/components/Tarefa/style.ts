import styled from 'styled-components'
import { cores } from '../../styles/variaveis(cores)'

export type TituloCard = {
  final: boolean
}

export type CardTagsType = {
  status?: string
  prioridade?: string
}

function retornaCorDeFundo(props: CardTagsType): string {
  if ('status' in props) {
    switch (props.status) {
      case 'pendente':
        return cores.amarelo
      case 'concluida':
        return cores.verde
    }
  } else if ('prioridade' in props) {
    switch (props.prioridade) {
      case 'urgente':
        return cores.vermelho
      case 'importante':
        return cores.mostarda
    }
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 16px;
  width: 100%;
  margin-bottom: 32px;
`

export const Titulo = styled.h3<TituloCard>`
  font-size: 18px;
  font-wight: 700;
  text-decoration: ${(props) => (props.final ? 'line-through' : 'none')};
  &:after {
    content: '✔';
    margin-left: 8px;
    display: ${(props) => (props.final ? '' : 'none')};
    font-size: 16px;
  }
`

export const Tag = styled.span<CardTagsType>`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  font-weight: 700;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  display: block;
  border: none;
  font-size: 14px;
  color: #8b8b8b;
  font-family: Roboto Mono;
  height: auto;
  overflow-y: none;
  resize: none;
`

export const Informacoes = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
`

export const BarraAcoes = styled.div`
  border-radius: 0px 0px 16px 16px;
  padding: 16px;
  border-top: 1px solid #e5e5e5;
`

export const Botao = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  color: #fff;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  font-weight: 700;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`

export const BotaoEditar = styled(Botao)`
  background-color: ${cores.cinza};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${cores.vermelho};
`

export const ContainerTitulo = styled.div`
  display: flex;
  column-gap: 8px;
`
