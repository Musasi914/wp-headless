import Link from "next/link";
import { getPosts } from "./data";
import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";
import PostsList from "@/components/PostsList";

export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { page = "1" } = await searchParams;

  const { posts, totalPages } = await getPosts(page);

  return (
    <>
      <h1 className="font-bold text-2xl mb-8">記事一覧</h1>

      <PostsList posts={posts} />

      <div className="flex mt-8 justify-between">
        {Number(page) > 1 ? (
          <Button asChild size="icon" variant="outline">
            <Link href={`/posts?page=${Number(page) - 1}`}>
              <ChevronLeft size={20} />
            </Link>
          </Button>
        ) : (
          <span></span>
        )}
        {Number(page) < totalPages ? (
          <Button asChild size="icon" variant="outline">
            <Link href={`/posts?page=${Number(page) + 1}`}>
              <ChevronRight size={20} />
            </Link>
          </Button>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}
