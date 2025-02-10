import dbConnect from "@/lib/dbConnect";
// import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

export const dynamic = "force-dynamic";

export default async function ProductPage() {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
  //   cache: "force-cache",
  // });
  // const data = await res.json();

  // const data = await dbConnect("practice_data").find({}).toArray();

  const data = await getProducts();

  // if (!data?.length) {
  //   // redirect("/"); // this is server component
  //   return <div>Loading...</div>;
  // }

  return (
    <ul className="text-center mt-8">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
      {/* <p>{JSON.stringify(data)}</p> */}
    </ul>
  );
}
