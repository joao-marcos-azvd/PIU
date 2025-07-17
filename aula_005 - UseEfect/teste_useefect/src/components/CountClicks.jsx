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
      const nome = ['Albert Einstein', 'Marie Curie', 'Isaac Newton', 'Galileu Galilei', 'Charles Darwin',
                    'Nikola Tesla', 'Stephen Hawking', 'Ada Lovelace', 'Alan Turing', 'Niels Bohr',
                    'Gregor Mendel', 'Rosalind Franklin', 'Louis Pasteur', 'Carl Sagan', 'Rachel Carson',
                    'Jane Goodall', 'Dmitri Mendeleev', 'Leonardo da Vinci', 'Richard Feynman', 'Tim Berners-Lee']
      const ranndomNome = nome[Math.floor(Math.random() * nome.length)]
      setNome(ranndomNome)
  }

  // function handleCobra() {
  //   setCobra(cobra + "=")
  // }



  useEffect(() => {handleColor()}, [count])

  useEffect(() => {handelNome()}, [cobra])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCobra(cobra + "=")}>
          Crescer 
        </button> 
      </div>
      <h1>{nome}</h1>
      <h1>{cobra}</h1>
    </>
  )
}
