import styled from 'styled-components'

export const Main = styled.main`
  padding: 40px;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
`

export const Pesquisa = styled.h3`
  margin-bottom: 40px;
`

export const BotaoNovaTarefa = styled.button`
  border-radius: 50%;
  background-color: #44bd32;
  width: 64px;
  height: 64px;
  position: sticky;
  bottom: 0px;
  left: 95%;
  font-size: 40px;
  color: #fff;
  border: none;
  cursor: pointer;
  &:after {
    content: '+';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
