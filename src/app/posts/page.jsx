import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All Posts",
  description: "Loading posts from jsonplaceholder",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.id} className={"border p-4 rounded"}>
          {/* Added styling */}
          <h2 className="text-lg font-semibold">{post.title}</h2>
          {/* Title styling */}
          <p className="text-gray-700 mt-2">{post.body}</p> {/* Body styling */}
          <Link
            href={`/posts/${post.id}`}
            className="text-blue-500 hover:underline mt-2 block"
          >
            {/* Link styling */}
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
