import { useState } from "react"

export default function Mudar_tema() {

    const [tema, setTema] = useState(false)

    function changecolormode(){
        if (!tema) {
            document.body.style.backgroundColor = "#101010"
            document.body.style.color = "white"
            setTema(true)
        } else {
            document.body.style.backgroundColor = "#fefefe"
            document.body.style.color = "#101010"
            setTema(false)
        }
    }

    return (
        <>
            <button onClick={changecolormode}>Clique</button>
        </>
    )
}