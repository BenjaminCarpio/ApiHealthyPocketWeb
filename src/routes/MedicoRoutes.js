import { Router } from "express";
import { obtenerMedicos,CreateMedico,updatemedico,deletemedico } from "../controller/medicocontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",obtenerMedicos);
router.post("/",CreateMedico);
router.put('/:code_med',updatemedico)
router.delete('/:code_med',deletemedico)


export default router;