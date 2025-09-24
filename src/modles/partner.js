import mongoose from "mongoose";

const recycleCompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  contactNumber: String,
  address: String,
  acceptedCategories: [{ type: String, enum: ['phone', 'laptop', 'battery', 'appliance', 'other'] }],
  rating: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('RecycleCompany', recycleCompanySchema);
