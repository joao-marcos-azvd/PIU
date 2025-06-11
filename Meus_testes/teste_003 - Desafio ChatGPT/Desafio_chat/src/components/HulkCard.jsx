// Aqui tá OK!
export default function HulkCard({hulk, onClick}) { // Criando o componente HulkCard
  return ( // Retorno do componente
    // Div
    <div className="hulk-card" onClick={onClick}> {/* onClick para capturar o clique no card */}
        <h3>{hulk.nome}</h3> {/* Nome do componente */}
        <img src={hulk.url} alt={hulk.nome} /> {/* Imagem do componente */}
        {/* <p>{hulk.descricao}</p> Descrição do componente */}
    </div>
  );
}