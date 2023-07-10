import { Router } from "express";
import { getMedicamentos,CrearMedicamentos,EliminarMedicamento,ActualizarMedicamento,getOneMedicamento } from "../controller/medicamentocontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",getMedicamentos);
router.post("/",CrearMedicamentos);
router.put('/:code_medca',ActualizarMedicamento)
router.delete('/:code_medca',EliminarMedicamento)
router.get("/:code_rcta",getOneMedicamento)


export default router;