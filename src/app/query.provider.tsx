'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';

const minute = 1000 * 60 * 1;
const hour = 1000 * 60 * 60 * 1;

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 1000 * 10, // ms
});

export default function QueryProviders({ children, client }: { children: React.ReactNode; client?: any }) {
  // const [queryClient] = useState(() => new QueryClient());
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // cacheTime: hour,
        // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  return (
    // <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    <PersistQueryClientProvider client={client || queryClient} persistOptions={{ persister: asyncStoragePersister }}>
      {children}
    </PersistQueryClientProvider>
  );
}
