import { useState } from "react"

export default function FormsTarefa () {
    const [tarefa, setTarefa] = useState([])
    const tarefas = []

    return (
        <>
            <p>Cadastre sua tarefa aqui</p>
            {/* onClick={SetTarefa()} */}
            <form onClick={[...tarefas, tarefa]}>
                <input type="text" name="tarefa" placeholder="Tarefa" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                <input type="submit" value="Cadastar"/>
            </form>
            {/* Tem que usar listagem de lista  */}
            <p>{tarefa}</p>
        </>
    )
}