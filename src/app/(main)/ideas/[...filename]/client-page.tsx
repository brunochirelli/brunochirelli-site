"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import type { PostQuery } from "../../../../../tina/__generated__/types";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
};

export default function PostClientPage(props: ClientPageProps) {
  const { data: postData } = useTina({ ...props });

  return (
    <div>
      <TinaMarkdown content={postData.post?.body} />
    </div>
  );
}
