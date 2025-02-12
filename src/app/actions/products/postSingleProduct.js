"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postedData) => {
  try {
    const result = await dbConnect(collectionNames.PRACTICE_DATA).insertOne(
      postedData
    );
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
