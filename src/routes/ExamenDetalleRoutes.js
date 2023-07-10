import { Router } from "express";
import { getDetalles,ModificarDetalle,EliminarDetalle,CrearDetalleExamen,getOneExamDetail} from "../controller/detallescontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",getDetalles);
router.post("/",CrearDetalleExamen);
router.put('/:code_det',ModificarDetalle);
router.delete('/:code_det',EliminarDetalle);
router.get("/:code_exam",getOneExamDetail);



export default router;