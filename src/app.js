import express from "express";
import morgan from "morgan";
import cors from "cors"; // Importa el paquete cors

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configuración de CORS
app.use(cors({ origin: "http://localhost:3000" }));

// Importa tus rutas
import UserRoutes from "./routes/UserRoutes.js";
import CitaRoutes from "./routes/CitaRoutes.js";
import MedicoRoutes from "./routes/MedicoRoutes.js";
import ExamenRoutes from "./routes/ExamenRoutes.js";
import DetallesRoutes from "./routes/ExamenDetalleRoutes.js"
import RecetaRoutes from "./routes/RecetaRoutes.js"
import MedicamentosRoutes from './routes/MedicamentoRoutes.js'
import MenuRoutes from  './routes/MenuRoutes.js';

// Asigna las rutas
app.use("/api/users", UserRoutes);
app.use("/api/cita", CitaRoutes);
app.use("/api/medico", MedicoRoutes);
app.use("/api/examen", ExamenRoutes);
app.use("/api/detalle", DetallesRoutes);
app.use("/api/receta", RecetaRoutes);
app.use("/api/medicamento", MedicamentosRoutes);
app.use("/api/Login", MenuRoutes);

export default app;