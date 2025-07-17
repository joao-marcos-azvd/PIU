import { useState, useEffect } from 'react';
import "./EffectAPI.css"

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setUsuarios(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchUsuarios();
  }, []); // O array vazio garante que o efeito execute apenas uma vez

  if (loading) {
    return <p>Carregando...</p>;
  }

  // Definição da tabela/lista de nomes > names
  const names = usuarios.map((usuario, index) => ( //Aqui eu digo que vou passar o nome e o index
    <li key={index}>{usuario.name}</li> // Já aqui é onde eu pego de fato o nome > usuário.nome
    // O valor tem que ser passado pra lista por meio de um li
  ))

  // Definição da tabela/lista de usernames
  const usernames = usuarios.map((usuario, index) => (
    <li key={index}>{usuario.username}</li>
  ))

  // Definição da tabela/lista de cidade
  const cidades = usuarios.map((usuario, index) => (
    <li key={index}>{usuario.address.city}</li>
  ))

  return (
    <div>
      <h1>Lista de dados dos usuáriosUsuários</h1>

      <div className='names'>
        <ul>
          {names}
        </ul>
      </div>

      <div className='usernames'>
        <ul>
          {usernames}
        </ul>
      </div>

      <div className='cidades'>
        <ul>
          {cidades}
        </ul>
      </div>

      {/* <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul> */}
    </div>
  );
}