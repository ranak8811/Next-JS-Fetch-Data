import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1>SinglePost: {p.id}</h1>
        <h2 className="text-lg font-semibold">{singlePost.title}</h2>
        <p className=" mt-2">{singlePost.body}</p>
      </div>
    </div>
  );
}
