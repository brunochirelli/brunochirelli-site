import { Suspense } from "react";

import PostClientPage from "./client-page";
import client from "../../../../../tina/__generated__/client";

export async function generateStaticParams() {
  const pages = await client.queries.postConnection();
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

type PostSingleProps = {
  params: Promise<{
    filename: string[];
  }>;
};

export default async function PostSingle({ params }: PostSingleProps) {
  const { filename } = await params;

  const data = await client.queries.post({
    relativePath: `${filename}.md`,
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PostClientPage {...data} />
    </Suspense>
  );
}
