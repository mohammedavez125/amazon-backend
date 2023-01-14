import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  // title price  image rating
  title: String,
  price: Number,
  rating: Number,
  image: String,
});

export default mongoose.model("Products", productSchema);
