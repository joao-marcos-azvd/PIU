import { useEffect, useState } from "react" // Aqui eu importo os hooks

export default function InputCor() {
    const [texto, setTexto] = useState("") //Aqui eu vou definir a variável "texto" e seu reset

    // Definição da função responsável por mudar de cor 
    function handleColor(){
        const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
        const randomColor = cor[Math.floor(Math.random() * cor.length)];
        document.body.style.backgroundColor = randomColor;
    }

    // Aqui eu defino o useEffect para monitorar o estado de texto e sempre que ele mudar, ativa a função handleColor e muda o backgroundColor
    useEffect(() => {handleColor()}, [texto])

    return(
        <div>
            {/* É apartir desseinput que eu monitoro as coisas */}
            <input
            type="text" 
            placeholder="Digite algo"
            value={texto} // O valor tem que ser o mesmo do texto, justamente pra eu poder usar o metodo event (e)
            // Aqui é onde eu chamo o evento onChange, que ataliza o texto sempre que algo é mudado no input
            onChange={(e) => setTexto(e.target.value)} /> 
            <p>{texto}</p>
        </div>
    )
}