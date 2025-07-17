import { useState } from "react";

export default function EnviarDados() {
  const [nomeBiblioteca, setNomeBiblioteca] = useState("");

  const enviarBiblioteca = async () => {
    if (!nomeBiblioteca.trim()) {
      alert("Digite um nome para a biblioteca.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/bibliotecas?nome=${encodeURIComponent(nomeBiblioteca)}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar para a API");
      }

      alert("Biblioteca enviada com sucesso!");
      setNomeBiblioteca(""); // limpa o input
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Falha ao enviar biblioteca.");
    }
  };

  return (
    <div>
      <h2>Cadastrar Biblioteca</h2>
      <input
        type="text"
        placeholder="Nome da biblioteca"
        value={nomeBiblioteca}
        onChange={(e) => setNomeBiblioteca(e.target.value)}
      />
      <button onClick={enviarBiblioteca}>Enviar</button>
    </div>
  );
}
