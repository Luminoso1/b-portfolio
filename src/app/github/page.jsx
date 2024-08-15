import { Suspense } from "react";
import Github from "../ui/Github";
import GithubSkeleton from "../ui/Github/skeleton";
import Layout from "../ui/components/Layout";

export default async function GithubPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Suspense fallback={<GithubSkeleton />}>
          <Github />
        </Suspense>
      </div>
    </Layout>
  );
}
