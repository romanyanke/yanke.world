import App from './App'
import { createRoot, hydrateRoot } from 'react-dom/client'

const container = document.getElementById('romanyanke')

if (container) {
  if (container.hasChildNodes()) {
    hydrateRoot(container, <App />)
  } else {
    createRoot(container).render(<App />)
  }
}
