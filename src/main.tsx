import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@templates/Layout';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from 'routes/Route';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
