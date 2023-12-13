"use client";
import Link from "next/link";

// RCC
function PostCard({ post }) {
  return (
    <div>
      <div key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h3>
            {" "}
            {post.id}. {post.title}
          </h3>
        </Link>
        <p>{post.body}</p>
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
