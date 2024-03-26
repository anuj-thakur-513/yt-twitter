import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 8000;

connectDb()
  .then(() => {
    // check for errors
    app.on("error", (error) => {
      console.error("\nError connecting to server: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`\nServer is listening at port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("\nMongoDB connection failed! ", err);
  });
