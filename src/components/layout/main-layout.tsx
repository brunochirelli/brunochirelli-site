"use client";

import type { ReactNode } from "react";

import { Box, Tabs } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

import Intro from "@/components/intro";

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
    <Box justifyItems={"center"}>
      <Box as={"header"} justifyItems={"center"}>
        <Intro />
      </Box>
      <Tabs.Root defaultValue={pathname} w={"full"}>
        <Tabs.List
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
          mx={"auto"}
        >
          {tabItems.map(({ key, label }) => (
            <Tabs.Trigger
              key={key}
              p={2}
              value={key}
              onClick={() => router.push(key)}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value={pathname ?? ""}>{children}</Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
