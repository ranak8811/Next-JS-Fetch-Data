import clientPromise from "@/lib/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("NextJSDB");
    const movies = await db
      .collection("practice_data")
      .find({})
      .limit(10)
      .toArray();
    res.json({ movies });
  } catch (e) {
    console.error(e);
  }
};
