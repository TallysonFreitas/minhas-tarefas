import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 16px;
  width: 100%;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-wight: 700;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 10px;
  color: #fff;
  background-color: #f44;
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
  background-color: #fc3;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  font-weight: 700;
  cursor: pointer;
`
