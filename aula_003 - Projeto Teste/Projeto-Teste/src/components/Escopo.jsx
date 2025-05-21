import "./Escopo.css" // Importando o CSS do Escopo

// Criando e exportando  a função Escopoco para que ela possa ser chamada no app
export default function Escopo () {
    const label = "Clique aqui" // Criando uma variável  para conter o valor que irá aparecer no botão

    // Definindo a função handeClick para quando ela for chamada ser exibido na tela a mensagem.
    function handleClick(){
        // Retorno da função que ue creaei
        return(
            alert("Alerta! Alguém clicou aqui!")
        )
    }
    // Retorno do componente
    return(
        <>  
            {/* Texto */}
            <div>
                <h2>Teste de componentes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium explicabo repellat commodi, aut perferendis debitis magni nihil hic blanditiis molestias cum labore et odit facere. Maiores excepturi quas dicta.</p>
            </div>
            <div>
                {/* Aqui eu defino que quando o botão for clicado deve retornar a mensagem definida */}
                <button onClick={()=>console.log("Tu clicou nesse botão! Nesse aí mesmo!")}>{label}</button>
            </div>
            <div>
                {/* Aqui eu defino que quando o botão for clicado deve acionar a função handleClick */}
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}