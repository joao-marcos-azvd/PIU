export default function HulkCard({hulk}) {
  return (
    <div className="hulk-card">
        <h3>{hulk.nome}</h3>
        <img src={hulk.url} alt={hulk.nome} />
        <p>{hulk.descricao}</p>
    </div>
  );
}