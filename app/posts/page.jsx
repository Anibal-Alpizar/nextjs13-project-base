import PostCard from "../../components/PostCard.jsx";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

// RSC
async function PostPage() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}

export default PostPage;
