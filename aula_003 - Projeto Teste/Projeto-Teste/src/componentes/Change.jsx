import { useState } from "react"

export default function Change() {
    let [valor, Atualizavalor]= useState("Opa")
    let [valor2, Atualizavalor2] = useState(1)

    function sets() {
        Atualizavalor(valor+valor2)
        Atualizavalor2(valor2+1)
    }

    return(
        <div>
            <button onClick={sets}>Cliques (☞ﾟヮﾟ☞) {valor}</button>
        </div>
    )
}