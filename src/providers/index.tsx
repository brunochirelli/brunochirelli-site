"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Provider } from "@/components/ui/provider";

import { PHProvider } from "./PHProvider";

const client = new QueryClient();

export function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <QueryClientProvider client={client}>
        <PHProvider>{children}</PHProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
