"use client";

import { type ReactNode, Suspense } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  const tabItems = [
    { key: "/", label: "About" },
    { key: "/ideas", label: "Ideas" },
    { key: "/cv", label: "CV" },
  ];

  return (
    <div>
      <header>
        <nav>
          {tabItems.map((tab) => (
            <Link key={tab.key} href={tab.key}>
              {tab.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
