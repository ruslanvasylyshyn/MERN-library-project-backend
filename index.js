import express, { request, response } from "express";
import { port } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";
import "dotenv/config";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling cors policy
app.use(cors());

app.get("/", (request, response) => {
  // console.log(request);
  return response.status(234).send("MERN library project");
});

// Middleware for express route
app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("App connected to database...");
    app.listen(port, () => {
      console.log(`App is listening on port ${port}....`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
