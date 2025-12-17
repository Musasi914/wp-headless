import { getPost } from "../data";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);
  // console.log(post);
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
