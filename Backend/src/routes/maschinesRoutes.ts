import express from "express";
import { createMaschine, getMaschine } from "../controllers/machineController";


const router = express.Router();


router.post('/', createMaschine);
router.get('/', getMaschine);


export default router;