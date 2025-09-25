import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId, // MongoDB’s auto _id
    auto: true,
  },
  companyEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  companyLicensePhoto: {
    type: String, // image URL / path
    required: true,
  },
  companyPassword: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Company = mongoose.model("Company", companySchema);

export default Company;