import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  rotateImg: { type: [String], required: true },
  image: { type: [String], required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  bestseller: { type: Boolean, default: false },
  offer: { type: Number, required: true },
  sizeChart: [
    {
      ref: { type: String, required: true },
      label: { type: String, required: true },
      XXS: { type: Number, required: true },
      XS: { type: Number, required: true },
      S: { type: Number, required: true },
      M: { type: Number, required: true },
      L: { type: Number, required: true },
      XL: { type: Number, required: true },
      XXL: { type: Number, required: true },
    },
  ],
  sizesInfo: [
    {
      size: { type: String, required: true },
      actualPrice: { type: Number, required: true },
      discountPrice: { type: Number, required: true },
      offer: { type: Number, required: true },
    },
  ],
});

const productModel = mongoose.model("Product", productSchema);
export default productModel;