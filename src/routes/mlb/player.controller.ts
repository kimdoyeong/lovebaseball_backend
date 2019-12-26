import { Router } from "express";
import { getPlayer } from "./player.actions";

const router = Router();
router.get("/:player", getPlayer);

export default router;
