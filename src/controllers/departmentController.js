import Department from "../models/Department.js";

// ✅ Create department
export const createDepartment = async (req, res) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json({ success: true, data: dept });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get all departments
export const getDepartments = async (req, res) => {
  try {
    const depts = await Department.find();
    res.json({ success: true, data: depts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
