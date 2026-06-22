import { QueryClient } from '@tanstack/react-query';

const retry = 1;
const staleTime = 1000 * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry,
      staleTime
    }
  }
});
