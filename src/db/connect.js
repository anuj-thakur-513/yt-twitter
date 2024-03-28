import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import asyncHandler from "../utils/asyncHandler.js";

const connectDb = asyncHandler(async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  );
  console.log(
    `\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`
  );
});

export default connectDb;
