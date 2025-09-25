import Partner from "../models/partner.js";

// ✅ Add new company
export const createPartner = async (req, res) => {
  try {
    const partner = await Partner.create(req.body);
    res.status(201).json({ success: true, data: partner });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get all companies
export const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json({ success: true, data: partners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
