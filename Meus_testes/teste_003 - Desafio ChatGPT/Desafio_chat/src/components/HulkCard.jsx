// Aqui tá OK!
export default function HulkCard({hulk}) { // Criando o componente HulkCard
  return ( // Retorno do componente
    // Div
    <div className="hulk-card"> 
        <h3>{hulk.nome}</h3> {/* Nome do componente */}
        <img src={hulk.url} alt={hulk.nome} /> {/* Imagem do componente */}
        <p>{hulk.descricao}</p> {/* Descrição do componente */}
    </div>
  );
}