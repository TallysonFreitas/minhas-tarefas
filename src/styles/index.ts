import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
    list-style:none;
  }
`

export const SContainer = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export default EstiloGlobal
