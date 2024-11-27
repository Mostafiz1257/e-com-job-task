import mongoose from "mongoose";

export interface ProductSummary {
  _id: mongoose.Schema.Types.ObjectId; // Include _id here
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
