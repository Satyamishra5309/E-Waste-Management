// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

// const router = express.Router();

// // Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create new user
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error signing up", error: error.message });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // find user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // create token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error: error.message });
//   }
// });

// export default router;



import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);

export default router;

