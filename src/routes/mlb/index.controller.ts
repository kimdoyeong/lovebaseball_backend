import { Router } from "express";
import player from "./player.controller";
const router = Router();

router.use("/player", player);
export default router;
