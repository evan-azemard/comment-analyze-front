import { HomePage } from '@pages/HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@templates/Layout';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomePage />
      </Layout>
    </QueryClientProvider>
  </StrictMode>
)
