import './App.css'
import { ListaDeBotoes } from './componentes/botao'

const BotoesSTR : Array<string>= ["inicio","personagem"]
const BotoesEVENTS : Array<()=>void>= [()=>{},()=>{}]
function App() {

  return (
    <>
    <h1>
      Batalha No ifpi
    </h1>
    <ListaDeBotoes
    Labels={BotoesSTR}
    events={BotoesEVENTS}
    />
    </>
  )
}

export default App
