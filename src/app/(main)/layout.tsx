import "@/app/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainLayout from "@/components/layout/main-layout";
import { AllProviders } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <AllProviders>
          <MainLayout>{children}</MainLayout>
        </AllProviders>
      </body>
    </html>
  );
}