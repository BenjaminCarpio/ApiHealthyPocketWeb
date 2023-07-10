import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const medicamento = sequelize.define(
  "medicamento",
  {
    code_medca: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    code_rcta: {
        type: DataTypes.UUID,
        foreingKey:true,
        allowNull: false,

      },
  },
  {
    timestamps: false,
  }
);

