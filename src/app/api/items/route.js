import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  //   const data = await res.json();

  // const data = {
  //   message: "Successfully fetched data",
  //   error: false,
  //   status: 200,
  // };

  // return Response.json({ data });

  const data = await dbConnect("practice_data").find({}).toArray();

  return Response.json(data);
}
export async function POST(req) {
  //   console.log(req);
  const postData = await req.json();
  const result = await dbConnect("practice_data").insertOne(postData);
  revalidatePath("/products");
  return Response.json(result);
}
