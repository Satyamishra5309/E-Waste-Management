import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['phone', 'laptop', 'battery', 'appliance', 'other'], required: true },
  description: String,
  status: { type: String, enum: ['pending', 'assigned', 'collected', 'processed'], default: 'pending' },
  qrCode: String, // optional, for tracking
  imageUrl: String, // stored uploaded image path
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // field worker
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
