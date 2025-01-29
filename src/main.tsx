import { AuthPage } from '@pages/AuthPage'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthPage />
  </StrictMode>,
)
