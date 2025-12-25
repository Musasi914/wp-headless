import { getPost } from "../data";
import { format } from "date-fns";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);
  // console.log(post);
  return (
    <article className="prose dark:prose-invert dark:prose-pre:border">
      <hgroup className="not-prose">
        <h1 className="text-5xl font-bold">{post.title.rendered}</h1>
        <time dateTime={post.date}>
          {format(new Date(post.date), "yyyy/MM/dd")}
        </time>
      </hgroup>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
