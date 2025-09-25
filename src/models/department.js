import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
    trim: true,
  },
  governmentId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const department = mongoose.model('Department', departmentSchema);

export default department;
