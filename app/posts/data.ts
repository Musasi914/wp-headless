import { POSTS_ENDPOINT_URL, SEARCH_ENDPOINT_URL } from "@/lib/wp";
import { Post } from "@/types/post";
import { SearchPost } from "@/types/searchPost";
import "server-only";

export const getPosts = async (page: string) => {
  const pageNumber = parseInt(page);
  const res = await fetch(
    `${POSTS_ENDPOINT_URL}?page=${pageNumber}&per_page=1`
  );
  const totalPages = res.headers.get("X-WP-TotalPages");
  return {
    posts: (await res.json()) as Post[],
    totalPages: totalPages ? parseInt(totalPages) : 0,
  };
};

export const searchPosts = async (keyword: string) => {
  const res = await fetch(
    `${SEARCH_ENDPOINT_URL}?search=${keyword}&per_page=1`
  );
  const totalPages = res.headers.get("X-WP-TotalPages");

  return {
    posts: (await res.json()) as SearchPost[],
    totalPages: totalPages ? parseInt(totalPages) : 0,
  };
};

export const getPost = async (id: string) => {
  const res = await fetch(`${POSTS_ENDPOINT_URL}/${id}`);
  return (await res.json()) as Post;
};
