import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const medico = sequelize.define(
  "medico",
  {
    code_med: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jvpm: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    code_cita: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,
      },
  },
  {
    timestamps: false,
  }
);

