// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };
// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Add Mongo URI to .env.local");
// }
// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }
// export default clientPromise;

import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://<db_username>:<db_password>@cluster0.j5yqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;
