import { useState, useEffect } from 'react'

export default function TelaLogin() {
    const [tent, setTent] = useState()
    const [count, setCount] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault(); // Aqui eu travo o processo sempre que a função for chamada.
    }


    function handleColor(){
    if (tent === 'AlunoIFRN') {
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        document.body.style.backgroundColor = randomColor;
        window.alert("A tela tá mudando de cor, só que aí ela rederiza novamente e volta a cor normal :) Olhe só")
    } else {
      document.body.style.backgroundColor = '#000000';
    }
    }

    useEffect(() => {handleColor()}, [count])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Usuário'/>
                <br />
                <input 
                type="text" 
                placeholder='Senha'
                onChange={(e) => setTent(e.target.value)}/>
                <br />
                <button onClick={() => setCount((count) => count + 1)}>Testar</button>
            </form>
            <p>{tent}</p>
            <p>{count}</p>
        </div>
    )
}