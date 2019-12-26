import { Router } from "express";
import MLB from "./mlb/index.controller";

const router = Router();

router.use("/mlb", MLB);

export default router;
