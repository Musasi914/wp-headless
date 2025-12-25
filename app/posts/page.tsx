import Link from "next/link";
import { getPosts } from "./data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={post.id} className="relative">
            <CardHeader>
              {post.jetpack_featured_media_url ? (
                <div className="aspect-video relative">
                  <Image
                    src={post.jetpack_featured_media_url ?? ""}
                    alt={post.title.rendered}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    preload={index < 3 ? true : false}
                  />
                </div>
              ) : null}
              <CardTitle>
                <h2 className="text-xl">
                  <Link href={`/posts/${post.id}`}>
                    {post.title.rendered}
                    <span className="absolute inset-0"></span>
                  </Link>
                </h2>
                <small className="text-muted-foreground">
                  {format(new Date(post.date), "yyyy/MM/dd")}
                </small>
              </CardTitle>
            </CardHeader>
            <CardContent
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              className={cn(
                post.jetpack_featured_media_url
                  ? "line-clamp-2"
                  : "line-clamp--6"
              )}
            ></CardContent>
          </Card>
        ))}
      </div>

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
