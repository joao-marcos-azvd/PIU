// Importa o hook useState do React para manipular estado
import { useState } from "react";

// Define e exporta o componente EnviarDados
export default function EnviarDados() {
  // Estado que guarda o texto digitado no input (nome da biblioteca)
  const [nomeBiblioteca, setNomeBiblioteca] = useState("");

  // Função que será chamada quando o botão for clicado
  const enviarBiblioteca = async () => {
    // Verifica se o campo está vazio (ignora espaços em branco)
    if (!nomeBiblioteca.trim()) {
      alert("Digite um nome para a biblioteca."); // Exibe alerta se estiver vazio
      return; // Interrompe a função
    }

    try {
      // Faz uma requisição POST para a API com o nome da biblioteca como parâmetro na URL
      const response = await fetch(
        `http://127.0.0.1:8000/bibliotecas?nome=${encodeURIComponent(nomeBiblioteca)}`,
        {
          method: "POST", // Método HTTP POST
        }
      );

      // Se a resposta da API não for OK (status diferente de 200~299), lança erro
      if (!response.ok) {
        throw new Error("Erro ao enviar para a API");
      }

      // Se deu tudo certo, exibe mensagem de sucesso
      alert("Biblioteca enviada com sucesso!");

      // Limpa o campo de input
      setNomeBiblioteca("");
    } catch (error) {
      // Se ocorrer algum erro (conexão ou erro da API), exibe no console e alerta
      console.error("Erro ao enviar dados:", error);
      alert("Falha ao enviar biblioteca.");
    }
  };

  // JSX retornado pelo componente
  return (
    <div>
      <h2>Cadastrar Biblioteca</h2>

      {/* Input controlado: o valor dele vem da variável de estado nomeBiblioteca */}
      <input
        type="text"
        placeholder="Nome da biblioteca"
        value={texto}
        onChange={(e) => setNomeBiblioteca(e.target.value)} // Atualiza o estado quando o usuário digita
      />

      {/* Botão que dispara a função de envio */}
      <button onClick={enviarBiblioteca}>Enviar</button>
    </div>
  );
}