import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)
  const [cobra, setCobra] = useState("(/;)=")
  const [nome, setNome] = useState()



  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

    function handelNome () {
        const nome = ['Nome 01', 'Nome 02', 'Nome 03', 'Nome 04', 'Nome 05', 'Nome 06', 'Nome 07', 'Nome 08']
        const ranndomNome = nome[Math.floor(Math.random() * nome.length)]
        setNome(ranndomNome)
    }



  useEffect(() => {
    handleColor()
    handelNome()
    // setCobra(aux_cobra)
  },[{count}])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1>{nome}</h1>
      <h1>{cobra}</h1>
    </>
  )
}
