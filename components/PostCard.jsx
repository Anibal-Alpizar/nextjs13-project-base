"use client";

// RCC
function PostCard({ post }) {
  return (
    <div>
      <div key={post.id}>
        <h3>
          {" "}
          {post.id}. {post.title}
        </h3>
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
