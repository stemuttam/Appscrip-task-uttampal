import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
