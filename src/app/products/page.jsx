import dbConnect from "@/lib/dbConnect";
// import { redirect } from "next/navigation";
import React from "react";

// export const dynamic = "force-dynamic";

export default async function ProductPage() {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
  //   cache: "force-cache",
  // });
  // const data = await res.json();

  // const client = await dbConnect;
  // const data = await client.db.collection("practice_data").find({}).toArray();

  const data = await dbConnect("practice_data").find({}).toArray();

  // if (!data?.length) {
  //   // redirect("/"); // this is server component
  //   return <div>Loading...</div>;
  // }

  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/products`, {
  //   cache: "force-cache",
  // });
  // const data = await res.json();
  // console.log(data);

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
      {/* <p>{JSON.stringify(data)}</p> */}
    </ul>
  );
}
