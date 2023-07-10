import { Router } from "express";
import { getReceta,UpdateReceta,CrearReceta,EliminarReceta } from "../controller/recetacontroller.js";
import { examen } from "../models/examen.js";
const router = Router();

// Rutas Para Cita
router.get("/",getReceta);
router.post("/",CrearReceta);
router.put('/:code_rcta',UpdateReceta)
router.delete('/:code_rcta',EliminarReceta)



export default router;