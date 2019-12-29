import { Router } from "express";
import { getPlayer, searchPlayer } from "./player.actions";

const router = Router();

router.get("/search", searchPlayer);
router.get("/:player", getPlayer);

export default router;
