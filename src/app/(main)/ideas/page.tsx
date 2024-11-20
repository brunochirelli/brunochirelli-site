import Link from "next/link";

import client from "../../../../tina/__generated__/client";

export default async function IdeasPage() {
  const { data } = await client.queries.postConnection();

  return (
    <div>
      {data.postConnection.edges?.map((post) => (
        <div key={post?.node?.id}>
          <Link href={`/ideas/${post?.node?._sys.filename}`}>
            {post?.node?._sys.filename}
          </Link>
        </div>
      ))}
    </div>
  );
}
