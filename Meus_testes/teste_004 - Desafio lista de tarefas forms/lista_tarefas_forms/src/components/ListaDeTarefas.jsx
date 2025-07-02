import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState('') // Definição de uma variável auxiliar pra guardar uma tarefa
    const [lista, setLista] = useState([]) // Definição da Lista de tarefas
    const [situacoes, setSituacoes] = useState([])
    // Aqui eu vou definir uma variável pra controlar o status da tarefa
    const [situacao, setSituacao] = useState('Não Feita')


    // Aqui foi definida uma função pra travar os processos
    const handleSubmit = (e) => {
        e.preventDefault(); // Aqui eu travo o processo sempre que a função for chamada.
        setLista([...lista, tarefa]) // Atualizo a lista de tarefas
        setTarefa('') // Volto pro valor de vazio na variável
        setSituacoes([...situacoes, situacao])
        setSituacao('Não Feita'); 
    }

    const Ordenador = (e) => {
        const idtarefasPendentes = 
            situacoes.map((situacao, index) => ({ situacao, index }))
            .filter(item => item.situacao === "Pendente")
            .map(item => item.index);

        const idtarefasNaoFeitas = 
            situacoes.map((situacao, index) => ({ situacao, index }))
            .filter(item => item.situacao === "Não Feita")
            .map(item => item.index);

        const idtarefasFeitas = 
            situacoes.map((situacao, index) => ({ situacao, index }))
            .filter(item => item.situacao === "Feita")
            .map(item => item.index);

        const novaOrdem = [
            ...idtarefasPendentes,
            ...idtarefasNaoFeitas, 
            ...idtarefasFeitas
        ]

        const novaLista = novaOrdem.map(i => lista[i])
        const novasSituacoes = novaOrdem.map(i =>situacoes[i])

        setLista(novaLista)
        setSituacoes(novasSituacoes)
        }


    return(
        <div>
            <h2>Lista de Tarefas React</h2>

            {/* Aqui é onde chama a função no evento onSubmit*/}
            <form onSubmit={handleSubmit}>
                <label>
                    {/* O "e" significa evenet */}
                    <input type="text" name="tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)} /> 
                </label>
                    <input type="submit" value="Adicionar" />
            </form>

            {/* Aqui eu listo os itens da lista */}
            
            <ul>
                {lista.map((item, index) =>
                <li key={index}>
                    {item} - {situacoes[index]}
                    <br />
                    {/* Ainda tenho que resolver isso aqui */}
                    <select
                        value={situacoes[index]}
                        name="opcao"
                        onChange={(e) => {
                            const novasSituacoes = [...situacoes];
                            novasSituacoes[index] = e.target.value;
                            setSituacoes(novasSituacoes);
                    }}>
                        <option value="Não Feita">Não Feita</option>
                        <option value="Feita">Feita</option>
                        <option value="Pendente">Pendente</option>
                    </select>
                </li>
            )}
            </ul>
            <button onClick={Ordenador}>Ordenar</button>
            {/* {situacao} */}

        </div>
    )}