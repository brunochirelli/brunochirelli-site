"use client";

import { useQuery } from "@tanstack/react-query";

export default function ClientComponentExample() {
  const { data } = useQuery({
    queryKey: ["clientComponentExample"],
    queryFn: async () => Promise.resolve("ClientComponentExample"),
  });

  return <div>{data}</div>;
}
