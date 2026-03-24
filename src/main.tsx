import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // Birazdan oluşturacağız
import './style.css' // Tailwind stillerimiz

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)