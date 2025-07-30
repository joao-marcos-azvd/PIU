import { useEffect, useState } from "react";

export default function ObterDados() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [userid, setUserId] = useState()

  useEffect(() => {
    // Usamos uma função assíncrona dentro do useEffect
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //fecth faz uma requisição HTTP utilizando o método GET
        const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
        setPosts(data); // Atualiza o estado/valor da variável "usuarios" com os dados recebidos
      } catch (error) { // Isso aqui é pra caso occora algum erro.
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchPosts();}, []); // O array vazio garante que o efeito execute apenas uma vez

    // const posts_id = posts.filter(post => post.userId === userid)
    const posts_id = posts.filter(post => post.userId === userid)
    const posttitle = posts_id.map((post, index) => (
    <li key={index}>{post.title}</li>
  ))

  return(
    <div>
        <input type="number" onChange={(e) => setUserId(e.target.value)} max={10} min={1}/>
        <p>{userid}</p>
        <ul>
            {posttitle}
        </ul>
    </div>
  )
}