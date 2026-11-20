import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-700.css'
import '@fontsource/montserrat/latin-600.css'
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-800.css'
import '@fontsource/open-sans/latin-400.css'
import '@fontsource/open-sans/latin-500.css'
import '@fontsource/open-sans/latin-600.css'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Only "/" is prerendered; any other route served the same HTML renders fresh.
if (window.location.pathname === '/' && container.hasChildNodes()) {
  document.documentElement.dataset.psPrerendered = '1'
  hydrateRoot(container, app)
}
else {
  container.textContent = ''
  createRoot(container).render(app)
}
