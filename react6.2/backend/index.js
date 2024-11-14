import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import quotesArray from "./quotesSource.json" assert { type: "json" };

import Quote from "./qoutes.model.js";

import connectDB from "./db.js";

const app = express();
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("<p> Hello Sunny!</p>");
});

// app.get("/import", async (req, res) => {
//   const insertedQuotes = await Quote.insertMany(quotesArray);

//   res.send("<p> Hello World!</p>");
// });

app.get("/api/quotes", async (req, res) => {
  const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);
  res.send(randomQuote[0]);
});

app.listen(process.env.PORT);
