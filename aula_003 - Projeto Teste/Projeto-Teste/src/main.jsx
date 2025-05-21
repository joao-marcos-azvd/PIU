// Isso aqui já vem pronto como uma estrutura básica do projeto 
import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css' // Inportano o CSS o index
import App from './App.jsx' //Importando o App pra ele funcionar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
