import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/posts">記事一覧</Link>
      <Link href="/term">利用規約</Link>
    </div>
  );
}
