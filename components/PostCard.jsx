"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

// RCC
function PostCard({ post }) {
  const params = useParams();
  console.log({ params });
  return (
    <div className="bg-gray-950 p-10">
      <div key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h3 className="text-3xl font-bold mb-4">
            {" "}
            {post.id}. {post.title}
          </h3>
        </Link>
        <p className="text-slate-300">{post.body}</p>
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default PostCard;
