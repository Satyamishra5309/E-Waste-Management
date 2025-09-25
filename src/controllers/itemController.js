import Item from "../models/item.js";

// ✅ Add new item
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("seller_id", "fullName email");
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
