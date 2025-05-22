export default function Imagem({ src, alt, onClick, children }) {
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
      <img 
        src={src} 
        alt={alt} 
        style={{ width: '100%', borderRadius: '10px' }} 
      />
      <div>{children}</div>
    </div>
  );
}
