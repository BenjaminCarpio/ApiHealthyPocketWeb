import { Router } from "express";
import {getUsers,getOneUser,updateUsers,deleteUsers } from "../controller/maincontroller.js";
import { getcitas } from "../controller/citacontroller.js";
const router = Router();

// Rutas Para Usuario 
//router.post("/",CreateUsers);
router.get("/",getUsers);
router.get("/:code_user",getOneUser);
router.put("/:code_user", updateUsers);
router.delete("/:code_user", deleteUsers);


// Rutas Para Cita
router.get("/",getUsers);

export default router;