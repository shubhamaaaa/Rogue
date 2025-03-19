import express from "express";
import { upload } from "../config/cloudinary.js";
import { addProduct, getProduct, listProducts, removeProduct } from "../controllers/ProductController.js";


const router = express.Router();


router.post("/add", upload.fields([{ name: "rotateImg", maxCount: 1 }, { name: "image", maxCount: 10 }]),  addProduct);
router.delete("/remove/:id", removeProduct);
router.get("/list", listProducts);
router.get("/:id", getProduct);

export default router;
