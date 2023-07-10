import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { usuario } from "./usuario.js";

export const cita = sequelize.define(
  "cita",
  {
    code_cita: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,

    },
    tiempo_hos: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    precio: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    code_user: {
        type: DataTypes.UUID,
        allowNull: false,
        foreingKey:true,
      },
  },
  {
    timestamps: false,
  }
);

