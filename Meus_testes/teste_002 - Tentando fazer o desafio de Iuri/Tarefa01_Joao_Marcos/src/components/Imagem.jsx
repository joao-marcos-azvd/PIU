export default function Imagem({ src, alt, onClick, children, nome }) { // Aqui eu tô definindo o mue componente Imagem e os parametros que são passados com ele
  return (
    // Retorno ele dentro de uma div 
    <div 
    // Definição do estilo da minha imagem
      style={{ 
        padding: '10px', 
        width: '200px', 
        marginBottom: '20px',
        cursor: 'pointer'
      }}
      // Aqui eu definio o evento que vai acontecer se alguém clicar na imagem
      onClick={onClick} // Esse OnClick de dentro é o evento que eu passo como parametro do meu componente. Nesse caso, ele vem de SelecionarPersonagem.jsx
    >
      {/* Todos os itens dentro de {} são parametros passados pelo componente  */}
      <h3>{nome}</h3>
      <img // Aqui eu tô criando a imagem.
        src={src} 
        alt={alt} 
        style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
      />
      <div>{children}</div>
    </div>
  );
}
