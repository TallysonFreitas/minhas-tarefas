import FiltroCard from '../../components/FiltroCard'
import { Aside, Campo, Filtros } from './style'

const BarraLateral = () => {
  return (
    <Aside>
      <div>
        <Campo type="text" placeholder="Procurar" />
        <Filtros>
          <FiltroCard contador={3} legenda="pendentes" />
          <FiltroCard contador={4} legenda="concluidas" />
          <FiltroCard contador={2} legenda="urgentes" />
          <FiltroCard contador={2} legenda="importantes" />
          <FiltroCard contador={3} legenda="normal" />
          <FiltroCard contador={7} legenda="todas" ativo />
        </Filtros>
      </div>
    </Aside>
  )
}

export default BarraLateral
