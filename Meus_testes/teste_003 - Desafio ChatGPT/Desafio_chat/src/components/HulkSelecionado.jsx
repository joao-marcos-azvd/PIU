export default function HulkSelecionado({hulk_detalhes}) { // Aqui eu crio o meu componente HulkSelecionado - Tem que ser passado um parametro para ele, que nesse caso vai ser uma lista com os dados 

    if (!hulk_detalhes) { // Caso não tenha nem um hulk, ele retorna null
        return null;
    }

    // Caso algum hulk tenha sido selecionado, ele retorna isso.
    return (
        <div className="hulk_selecionado"> {/* Div de retorno */}
            {/* Aqui eu uso a manipulação de listas */}
            <h2>Detalhes do: {hulk_detalhes.nome}</h2> {/* Passo o nome como parametro */}
            <img src={hulk_detalhes.url} alt={hulk_detalhes.nome} /> {/* Passo as informações para a tag imagem - url e alt */}
            <p>{hulk_detalhes.descricao}</p> {/* Descrição */}
        </div>
    );
}