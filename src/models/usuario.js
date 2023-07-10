import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const usuario = sequelize.define(
  "usuario",
  {
    code_user: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate:{
        isUUID: 4,
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmail: {msg:"el correo deber tener el formato Correcto  @gmail.com / @outlook.com  etc"},
        }
      },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          function(password) {
            if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(password))) {
                throw new Error('La contraseña debe tener un minimo de 8 caracteres, incluyendo:  1 Mayuscula, 1 Minuscula, 1 numero especial y 1 Caracter');
            }
        }
        }
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  },
  {
    timestamps: false,
  }
);



/*usuario.hasOne(rol,{
    foreinkey: "code",
});

rol.belongsTo(usuario,{foreinkey:"code",targetId:"code"})*/

