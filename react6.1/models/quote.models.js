import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema(
  {
    quotes: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export const Quotes = mongoose.model("Quotes", quotesSchema);
