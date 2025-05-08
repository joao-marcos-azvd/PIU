import "./Escopo.css"

function Escopo () {
    const label = "Clique aqui"
    function handleClick(){
        return(
            alert("Alerta! Alguém clicou aqui!")
        )
    }
    return(
        <>
            <div>
                <h2>Teste de componentes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium explicabo repellat commodi, aut perferendis debitis magni nihil hic blanditiis molestias cum labore et odit facere. Maiores excepturi quas dicta.</p>
            </div>
            <div>
                <button onClick={()=>console.log("Tu clicou nesse botão! Nesse aí mesmo!")}>{label}</button>
            </div>
            <div>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}

export default Escopo