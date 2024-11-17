import { Suspense } from "react";

export default function CvPage() {
  return <Suspense fallback={<p>Loading...</p>}>CV Page</Suspense>;
}
