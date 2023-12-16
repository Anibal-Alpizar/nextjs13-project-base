import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function page({ params }) {
  const post = await loadPost(params.id);
  return (
    <div>
      <h1>Post Page {params.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <hr />
      <Suspense fallback={<div>Loading Posts...</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default page;
