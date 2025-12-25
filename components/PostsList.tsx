import { Post } from "@/types/post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";

export default function PostsList({ posts }: { posts: Post[] }) {
  return (
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
              {post.date && (
                <small className="text-muted-foreground">
                  {format(new Date(post.date), "yyyy/MM/dd")}
                </small>
              )}
            </CardTitle>
          </CardHeader>
          {post.excerpt.rendered && (
            <CardContent
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              className={cn(
                post.jetpack_featured_media_url
                  ? "line-clamp-2"
                  : "line-clamp--6"
              )}
            ></CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
