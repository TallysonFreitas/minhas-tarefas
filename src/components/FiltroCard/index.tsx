import { useState } from 'react'
import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = (props: Props) => {
  const [buscador, setBuscador] = useState(false)

  const handleClickSearch = () => {
    setBuscador(!buscador)
  }

  return (
    <S.Card ativo={buscador} onClick={handleClickSearch}>
      <S.Contador>{props.contador}</S.Contador>
      <S.Label>{props.legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
