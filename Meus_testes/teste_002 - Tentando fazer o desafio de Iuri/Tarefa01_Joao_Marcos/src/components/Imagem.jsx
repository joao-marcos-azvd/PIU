export default function Imagem({ src, alt, onClick, children, nome }) {
  return (
    <div 
      style={{ 
        padding: '10px', 
        width: '200px', 
        marginBottom: '20px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      <h3>{nome}</h3>
      <img 
        src={src} 
        alt={alt} 
        style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
      />
      <div>{children}</div>
    </div>
  );
}
