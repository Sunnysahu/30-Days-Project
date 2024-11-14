import mongoose from "mongoose";

const quotesSchema = new mongoose.Schema(
  {
    quotes: {
      type: Array,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Array cannot be empty!",
      },
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

export const Quotes = mongoose.model("Quotes", quotesSchema);
