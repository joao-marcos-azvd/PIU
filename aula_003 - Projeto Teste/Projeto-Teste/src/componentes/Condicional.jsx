// Fazer que isso aqui de ruin 
// import { useState } from "react"
// import Meucomponente from './Meucomponente'

// export default function Condicional() {
//     let[stado, Mudaestado] = useState(true)

//     return(
//         <>
//             {stado ? <Meucomponente /> : <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FDragon_Ball&psig=AOvVaw3BkZj2qwlzAfFq6DYQVY_A&ust=1747413307678000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCWiOfzpY0DFQAAAAAdAAAAABAE" alt="Goku" /> }
//             <div>
//                 <button onClick={Mudaestado(stado=true)}>Cliques (☞ﾟヮﾟ☞) </button>
//             </div>
//         </>
//     )
// }
import { useState } from "react";
import Meucomponente from './Meucomponente';

export default function Condicional() {
  const [estado, setEstado] = useState(true); // estado inicial: true

  return (
    <>
      {estado ? (
        <Meucomponente />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/8/88/Goku_Dragon_Ball.png"
          alt="Goku"
          style={{ width: '200px' }} // opcional
        />
      )}
      <div>
        <button onClick={() => setEstado(!estado)}>
          Cliques (☞ﾟヮﾟ☞)
        </button>
      </div>
    </>
  );
}
