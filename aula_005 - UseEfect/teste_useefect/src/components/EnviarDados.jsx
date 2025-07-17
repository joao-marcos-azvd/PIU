import { useEffect, useState } from "react";

export default function EnviarDados() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const enviarDados = async () => {
      const nomeBiblioteca = "biblioteca01"; // nome que será enviado

      try {
        const response = await fetch(`http://127.0.0.1:8000/bibliotecas?nome=${nomeBiblioteca}`, {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Erro ao enviar para a API");
        }

        console.log("Biblioteca criada com sucesso");
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      }
    };

    if (count > 0) {
      enviarDados();
    }
  }, [count]);

  return (
    <div>
      <p>Envio de dados</p>
      <button onClick={() => setCount((c) => c + 1)}>Enviar</button>
    </div>
  );
}
