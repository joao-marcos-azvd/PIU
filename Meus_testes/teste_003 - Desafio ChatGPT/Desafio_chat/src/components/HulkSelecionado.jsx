export default function HulkSelecionado({hulk_detalhes}) {
    if (!hulk_detalhes) {
        return null;
    }

    return (
        <div className="hulk_selecionado">
            <h2>Detalhes do: {hulk_detalhes.nome}</h2>
            <img src={hulk_detalhes.url} alt={hulk_detalhes.nome} />
            <p>{hulk_detalhes.descricao}</p>
        </div>
    );
}