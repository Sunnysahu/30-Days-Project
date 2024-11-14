import mongoose from "mongoose";

const quote = mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true }
);

export default mongoose.models.Quote || mongoose.model("Quote", quote);
