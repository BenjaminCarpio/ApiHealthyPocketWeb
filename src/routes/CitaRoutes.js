import { Router } from "express";
import { getcitas,CreateCita,ModificarCita,deleteCita,getOnecita} from "../controller/citacontroller.js";
const router = Router();

// Rutas Para Cita
router.get("/",getcitas);
router.post("/",CreateCita);
router.put("/:code_cita",ModificarCita);
router.delete("/:code_cita",deleteCita);
router.get("/:code_user",getOnecita);

export default router;