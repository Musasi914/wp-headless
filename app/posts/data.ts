import { POSTS_ENDPOINT_URL } from "@/lib/wp";
import { Post } from "@/types/post";
import "server-only";

export const getPosts = async () => {
  const res = await fetch(POSTS_ENDPOINT_URL);
  return (await res.json()) as Post[];
};

export const getPost = async (id: string) => {
  const res = await fetch(`${POSTS_ENDPOINT_URL}/${id}`);
  return (await res.json()) as Post;
};
