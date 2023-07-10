import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const detalles = sequelize.define(
  "detalles",
  {
    code_det: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    gasto: {
        type: DataTypes.INTEGER,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    resultado: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    code_exam: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,
      },
  },
  {
    timestamps: false,
  }
);

