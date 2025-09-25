import express from "express";
import { createComponent, getComponentsByItem } from "../controllers/componentController.js";

const router = express.Router();

router.post("/", createComponent);
router.get("/:productId", getComponentsByItem);

export default router;
