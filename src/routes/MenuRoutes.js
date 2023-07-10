import { Router } from "express";
import { Login,Signup } from "../controller/MenuController.js";

const router = Router();

// Rutas Para Usuario 
router.post("/",Login);

router.post("/Signup",Signup);


export default router;