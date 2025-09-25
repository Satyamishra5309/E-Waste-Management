import Component from "../models/components.js";

// ✅ Add component for product
export const createComponent = async (req, res) => {
  try {
    const component = await Component.create(req.body);
    res.status(201).json({ success: true, data: component });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get components of a product
export const getComponentsByItem = async (req, res) => {
  try {
    const components = await Component.find({ productId: req.params.productId });
    res.json({ success: true, data: components });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
