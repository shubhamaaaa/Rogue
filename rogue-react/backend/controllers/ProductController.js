
import { cloudinary } from "../config/cloudinary.js";
import productModel from "../models/productModel.js";


export const addProduct = async (req, res) => {
  try {
    const { name, shortDescription, description, category, bestseller, offer, sizeChart, sizesInfo } = req.body;
    const rotateImg = req.files["rotateImg"].map((file) => file.path);
    const image = req.files["image"].map((file) => file.path);

    const product = new productModel({
      name,
      shortDescription,
      description,
      rotateImg,
      image,
      category,
      bestseller,
      offer,
      sizeChart:JSON.parse(sizeChart),
      sizesInfo:JSON.parse(sizesInfo),
    });

    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Remove Product
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await productModel.findOneAndDelete({ id });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// List Products
export const listProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Single Product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await productModel.findOne({ id });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
