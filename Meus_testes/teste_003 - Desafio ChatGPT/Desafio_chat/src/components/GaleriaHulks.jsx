import HulkCard from "./HulkCard"; // Importando o componente HulkCard
import HulkSelecionado from "./HulkSelecionado"; // Importando o componente que seleciona o Hulk
import { useState } from 'react'; // Importando o useState do React para monitorar o estado do Hulk selecionado

// Não vou usar a children aqui, pq vou importar o HulkCard diretamente na GaleriaHulks
export default function GaleriaHulks() { // Criando o componente GaleriaHulks 
    const hulks = [ // Lista dos Hulks
        { 
            id: 1,
            nome: "Hulk Azul", 
            url: "/hulk_azul.png", 
            descricao: "Forjado nas tempestades de um planeta oceânico, o Hulk Azul canaliza a fúria das marés e o silêncio das profundezas. Seu poder não vem apenas da força bruta, mas da calma antes do caos. Quando sua pele brilha como o fundo do mar, é sinal de que a galáxia está prestes a tremer." },
        { 
            id: 2,
            nome: "Hulk Negro", 
            url: "/hulk_preto.png", 
            descricao: "Nascido da energia escura que permeia os cantos esquecidos do multiverso, o Hulk Negro é a encarnação do equilíbrio entre fúria e foco. Ele não grita — ele age. Seu corpo denso como obsidiana absorve luz, e sua presença impõe silêncio. Quando ele caminha, até o tempo hesita." },
        { 
            id: 3,
            nome: "Hulk Roxo", 
            url: "/hulk_roxo.png", 
            descricao: "Massivo, imponente e com uma fúria de proporções míticas. O Hulk Roxo é uma visão chocante de poder desenfreado, com músculos titânicos de um roxo profundo que parecem absorver a luz ao seu redor. Uma força incontrolável e visualmente impactante, ele é o terror personificado em violeta." },
        { 
            id: 4,
            nome: "Hulk Verde", 
            url: "/hulk_verde.png", 
            descricao: "Personificação da raiva pura, com olhos que queimam e um rugido que ecoa a destruição. Ele é a máquina de esmagar definitiva, uma força da natureza que não pode ser contida." },
        { 
            id: 5,
            nome: "Hulk Vermelho", 
            url: '/hulk_vermelho.png', 
            descricao: "É uma potência de cor escarlate, com músculos que parecem forjados no próprio fogo. Ao contrário do seu homólogo verde, ele exibe um olhar astuto e calculista, e a sua força é amplificada por explosões de calor. Cada passo deixa um rasto de destruição, e cada golpe é um cataclismo." }
    ];

    const [selectedhulk, setSelectedHulk] = useState(null); // Variável para armazenar o Hulk selecionado -> selectedhulk

    const handleCardClick = (detalhes_hulk_selecionado) => { // Função para lidar com o clique no card do Hulk
        setSelectedHulk(detalhes_hulk_selecionado); // Atualiza o Hulk selecionado
    };

    return ( // Retorno do componente GaleriaHulks
        <div className="galeria-hulks">
            <h2>Galeria de Hulks</h2>

            {/* Aqui criamos um HulkCard para cada Hulk */}
            <div className="cards-container">
                {/* Fazendo um "for" pra percorer a lista dos hulks */}
                {/* A varialvel hulk é a lista com os dados */}
                {hulks.map((hulk) => ( 
                <HulkCard 
                    key={hulk.id} // Passando o id/chave do card
                    hulk={hulk} // Passando os dados do Hulk para o componente HulkCard
                    onClick={() => handleCardClick(hulk)} // Passo a função de clique para cada card
                />
                ))}
            <HulkSelecionado hulk_detalhes={selectedhulk} /> {/* Passando o Hulk selecionado para o componente HulkSelecionado */}
            </div>
        </div>
  );
}