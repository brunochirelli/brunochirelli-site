import type { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const TestClientProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
