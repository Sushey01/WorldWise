import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { CitiesProvider } from './contexts/CitiesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CitiesProvider>
    <App />
    </CitiesProvider>
  </StrictMode>,
)
