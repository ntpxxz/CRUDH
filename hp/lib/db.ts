import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "it-help",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err: any) {
    console.log("Error: ", err);
    throw new Error("Error: ", err);
  }
};

export default connect;


// import mongoose from "mongoose";

// export const connect = async () => {
//   try {
//     const mongoUri = process.env.MONGODB_URI;

//     if (!mongoUri) {
//       throw new Error("MONGODB_URI environment variable is not set.");
//     }

//     await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Add other connection options as needed (e.g., useCreateIndex, useFindAndModify)
//     });

//     console.log("Connected to MongoDB!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit the process with an error code (optional)
//   }
// };

// // You don't necessarily need to export connect as MongoClient
// // as it's not the exact equivalent. Mongoose provides its own connection management.
