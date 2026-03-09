<<<<<<< HEAD
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("products", productSchema);

=======
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("products", productSchema);

>>>>>>> dc3db8719a2fef1dbcd15cab215eb9aec4a6a66f
export default productModel;