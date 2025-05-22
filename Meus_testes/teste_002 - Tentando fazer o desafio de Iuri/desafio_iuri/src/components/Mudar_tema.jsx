import { useState } from "react"

// Definição do meu componente
export default function Mudar_tema() {

    // Definindo uma constante pra poder saber qual vai ser o tema
    const [tema, setTema] = useState(false)

    // Definindo função pra mudar o tema
    function alterartema(){
        if (!tema) { // Se tema != false 
            document.body.style.backgroundColor = "#101010" // Altero a cor do background
            document.body.style.color = "white" // Altero a cor das letras
            setTema(true) // Mudo o valor de tema pra true
        } else { // Aqui faz justamente o contrário
            document.body.style.backgroundColor = "#fefefe"
            document.body.style.color = "#101010"
            setTema(false)
        }
    }

    return (
        <>
            <h1>Escolha um personagem</h1>
            <button onClick={alterartema}>Mudar tema</button>
        </>
    )
}