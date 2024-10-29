import type { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "@/components/ui/provider";

const client = new QueryClient();

export const TestClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </Provider>
  );
};
