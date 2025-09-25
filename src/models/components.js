import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // link to Product collection
    required: true,
  },
  component: {
    type: String,
    enum: ["screen", "battery", "charger", "accessories"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // no negative prices
  },
}, { timestamps: true });

const Component = mongoose.model("Component", componentSchema);

export default Component;

