import { marvel } from './dados' // Aqui eu tô inportando os dados 

// Tentar criar algo que seja semelhante a um for dentro de outro for
export default function DropDown() { // Criando a função
     const lista_filmes = marvel.map((filme) => // Aqui eu pego uma lista da lista
     // aqui eu pego o elemento id da lista (Tem que ser entre {})
        <li key={filme.id}>
            {filme.titulo}
            <li style={{listStyleType: "none"}}>Ano: {filme.ano_lançamento}</li>
            <li style={{listStyleType: "none"}}>Tempo: {filme.tempo}</li>
            <br />
        </li>
        )

    return(
        <ul>{lista_filmes}</ul>
    )
}