import express from "express";
import { createPartner, getPartners } from "../controllers/partnerController.js";

const router = express.Router();

router.post("/", createPartner);
router.get("/", getPartners);

export default router;
