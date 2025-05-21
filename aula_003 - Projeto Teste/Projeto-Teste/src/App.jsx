import './App.css' // Importano o CSS da minha página
import Escopo  from './components/Escopo'
import Redux from './components/Redux'
import Meucomponente from './components/Meucomponente'
import Change from './components/Change'
// Importano o meu componente do local de origem dele 
import Condicional from './components/Condicional'

// Aqui eu defino o meu App, one a aplicação vai funcionar, como se fosse minha "rota"
function App() {

  // Definição do que vai ser retornado para meu navegador 
  return (
    // É obrigatório retornar tudo dentro de uma tag, pode ser em uma div ou algo do tipo, mas é bom que seja em algo tipo assim: <> </>
    <>
      {/* <Escopo /> */}
      {/* <Redux /> */}
      {/* <Meucomponente /> */}
      {/* <Change /> */}
      <Condicional /> 
    </>
  )
}

// Essa importação é necessária para o App ser chamado no main.jsx, local onde o cóigo roda de fato.
export default App
