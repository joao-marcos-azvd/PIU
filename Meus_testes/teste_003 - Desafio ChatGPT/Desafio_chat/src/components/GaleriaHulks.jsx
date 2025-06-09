export default function GaleriaHulks() {
    const hulks = [ // Terminar a lista de Hulks
        { nome: "Hulk Azul", url: ".\public\hulk_azul.png", descricao: "Hulk Tradicional" },
        { nome: "Hulk 2", url: "https://example.com/hulk2.jpg", descricao: "Descrição do Hulk 2" },
        { nome: "Hulk 3", url: "https://example.com/hulk3.jpg", descricao: "Descrição do Hulk 3" },
        { nome: "Hulk 4", url: "https://example.com/hulk4.jpg", descricao: "Descrição do Hulk 4" },
        { nome: "Hulk 5", url: '.\public\hulk_verde.png', descricao: "Descrição do Hulk 5" }
    ];

    return (
        <div className="galeria-hulks">
            <h2>Galeria de Hulks</h2>
            <p>Essa é a galeria dos Hulks</p>
            <img src="" alt="" />
        </div>
    );
}