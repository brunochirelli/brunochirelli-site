"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PHProvider } from "./PHProvider";
import { Provider } from "@/components/ui/provider";

const client = new QueryClient();

export function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <PHProvider>{children}</PHProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
