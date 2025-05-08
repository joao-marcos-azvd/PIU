function Meucomponente () {
    let texto_botaão = "CLICK AQUI AGORA! 👍"
    function adicionar_texto() {
        const texto = prompt("Por favor, introduza o seu texto:");
        return(
            alert(texto)
        )
    }

    return(
        <>
            <div>
                <h1>Testando oque eu tô fazendo</h1>
                <button onClick={adicionar_texto}>{texto_botaão}</button>
            </div>
        </>
    )
}

export default Meucomponente