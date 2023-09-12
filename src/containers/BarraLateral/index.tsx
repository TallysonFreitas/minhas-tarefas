import FiltroCard from '../../components/FiltroCard'
import { Aside, Campo, Filtros } from './style'

const BarraLateral = () => {
  return (
    <Aside>
      <div>
        <Campo type="text" placeholder="Procurar" />
        <Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard ativo />
        </Filtros>
      </div>
    </Aside>
  )
}

export default BarraLateral
