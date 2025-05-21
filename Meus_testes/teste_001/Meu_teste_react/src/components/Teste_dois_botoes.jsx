import { useState } from "react";

export default function Teste_dois_botoes() {
    set [contador, SetContaor] = useState(0);

    function handeClick() {
        SetContaor(contador + 1)
}

return(
    <>
        <h1>Vamos testar alterar simuntaneamnete o valor em 2 botões</h1>
        <MyButton >
    </>)

function Mybutton ({contador, onClick}) {
    return(
        <button onClick={onClick}>Total de clicks: {contador}</button>
    )
}
}
{/* 
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
} */}