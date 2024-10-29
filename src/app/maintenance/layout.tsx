import type { ReactNode } from "react";

import { AllProviders } from "@/providers";

export default function MaintenanceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
