import { searchPosts } from "../posts/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Search({
  searchParams,
}: {
  searchParams: { keyword: string };
}) {
  const { keyword = "" } = await searchParams;

  const { posts } = await searchPosts(keyword);

  console.log(posts);

  return (
    <>
      <h1 className="font-bold text-2xl mb-8">{keyword}の検索結果</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} className="relative">
              <CardHeader>
                <CardTitle>
                  <h2>
                    <Link href={`/posts/${post.id}`}>
                      {post.title}
                      <span className="absolute inset-0"></span>
                    </Link>
                  </h2>
                </CardTitle>
              </CardHeader>
            </Card>
          ))
        ) : (
          <p className="text-sm text-muted-foreground mt-4">
            検索結果がありません
          </p>
        )}
      </div>
    </>
  );
}
