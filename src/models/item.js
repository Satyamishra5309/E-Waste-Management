import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId, // MongoDB auto _id
    auto: true,
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User collection
    required: true,
  },
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
  },
  version: {
    type: String,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  ageInYears: {
    type: Number, // how old the product is
    required: true,
  },
  isWorking: {
    type: Boolean,
    required: true,
  },
  componentsIncluded: {
    type: [String], // array of selected components
    enum: ["screen", "battery", "charger", "accessories"],
  },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;

