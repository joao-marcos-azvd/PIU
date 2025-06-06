import { useState } from 'react';
import Imagem from './Imagem';

export default function SelecionarPersonagem() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const personagens = [
    { src: './Goku.jpg', alt: 'Goku' , desc: 'Dragon Ball'},
    { src: './Kick_Buttowski.png', alt: 'Kick Buttowski', desc: 'Kick Buttowski: Suburban Daredevil' },
    { src: './super_choque.png', alt: 'Super Choque', desc: ' Static Shock' },
    { src: './homer.jpg', alt: 'Homer simpson', desc: 'Os simpsons'},
    { src: './Mario.png', alt: 'Mário', desc: 'Super Mário Bros'},
    { src: './padrinhos_magicos.jpg', alt: 'Vanda e Cosmo', desc: "Padrinhos mágicos"}
  ];

  function handleSelecionar(src, alt, desc) {
    setImagemSelecionada({ src, alt, desc});
  }

  return (
    <div>
      <div className='imagens'>
        {personagens.map((personagem) => (
          <Imagem
            nome={personagem.alt}
            key={personagem.alt}
            src={personagem.src}
            alt={personagem.alt}
            onClick={() => handleSelecionar(personagem.src, personagem.alt, personagem.desc)}
          />
        ))}
      </div>

      {imagemSelecionada && (
        <div className='selecionada'>
          <h3>Selecionado: {imagemSelecionada.alt}</h3>
          <img 
            src={imagemSelecionada.src} 
            alt={imagemSelecionada.alt} 
            style={{ width: '300px' }} 
          />
          <p>{imagemSelecionada.desc}</p>
        </div>
      )}
    </div>
  );
}
