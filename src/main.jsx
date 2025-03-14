import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { Handlegiver } from './cartprovider.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Handlegiver>
    <App />
    </Handlegiver>
   
  </StrictMode>,
)
