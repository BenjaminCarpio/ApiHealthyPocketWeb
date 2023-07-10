import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const rol = sequelize.define(
  "roles",
  {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
