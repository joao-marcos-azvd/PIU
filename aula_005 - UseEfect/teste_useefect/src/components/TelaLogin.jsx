// Importa os hooks useState e useEffect do React
import { useState, useEffect } from "react";

// Componente principal
export default function TelaLogin() {
  // Estado para armazenar o valor digitado no campo de login
  const [login, setLogin] = useState("");

  // Estado para armazenar o valor digitado no campo de senha
  const [senha, setSenha] = useState("");

  // Estado que será preenchido após o envio do formulário
  const [dadosEnviados, setDadosEnviados] = useState(null);

  // useEffect será executado sempre que 'dadosEnviados' mudar
  useEffect(() => {
    if (dadosEnviados) {
      // Mostra os dados no console (efeito colateral)
      console.log("Login:", dadosEnviados.login);
      console.log("Senha:", dadosEnviados.senha);
    }
  }, [dadosEnviados]); // Dependência: roda apenas quando 'dadosEnviados' for atualizado

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede que a página seja recarregada

    // Atualiza o estado com os dados do formulário
    setDadosEnviados({
      login: login,
      senha: senha,
    });

    // Limpa os campos do formulário (opcional)
    setLogin("");
    setSenha("");
  };

  // O que será exibido na tela
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      {/* Formulário que chama handleSubmit quando for enviado */}
      <form onSubmit={handleSubmit}>
        {/* Campo de texto para o login */}
        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)} // Atualiza o estado do login
        />
        <br /><br />

        {/* Campo de senha */}
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
        />
        <br /><br />

        {/* Botão de envio do formulário */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
