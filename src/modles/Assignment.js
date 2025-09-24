import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['assigned', 'in_progress', 'completed'], default: 'assigned' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
