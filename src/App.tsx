import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { SContainer } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <SContainer className="App">
        <BarraLateral />
        <ListaDeTarefas />
      </SContainer>
    </>
  )
}

export default App
