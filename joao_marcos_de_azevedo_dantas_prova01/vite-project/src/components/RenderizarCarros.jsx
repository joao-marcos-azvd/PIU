import { carros } from "./dados_carro"; // Aqui eu tô inportando os dados 

export default function RenderizarCarros() { // Criando a função
    // Lista de todos os carros 
    const lista_carros = carros.map((carro) => // Aqui eu pego uma lista da lista
    // aqui eu pego o elemento id da lista 
    <li key={carro.id}>
        {/* Aqui eu retorno o modelo */}
        {carro.modelo} 
        {/* Aqui eu faço o retorno da cor do carro */}
        <li style={{listStyleType: "none"}}>cor: {carro.cor}</li>
        <br />
    </li>
    )

    return( // Retorno da minha função
        <div>   
            <ul>{lista_carros}</ul>
        </div>
    )
}