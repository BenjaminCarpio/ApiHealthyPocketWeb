import { UUID } from "sequelize";
import { rol } from "../models/rol.js";
import { usuario } from "../models/usuario.js";

//Obtener Todos los Usuarios
export async function getUsers(req, res) {
    try {
      const usuarios = await usuario.findAll({
        atributes: ["username","correo","nombre","apellido","contraseña","code"],
      });
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

/* registrar Usuarios ( este metodo Funciona Pero Utilizar Mejor el Metodo de SingUp)
export async function CreateUsers(req, res) {
    const {username,correo,nombre,apellido,contraseña,code}=req.body;

    try{
        let newUsuario = await usuario.create(
            {
                username,correo,nombre,apellido,contraseña,code
            },
            {
                fields: ["username","correo","nombre","apellido","contraseña","code"],
            }
        );
        console.log('si se creo el Usuario')
        return res.json(newUsuario);
    }catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
    //res.json("received");
    console.log(req.body);
}*/

//Obtener un usuario
export async function getOneUser(req, res) {
  const {code_user} = req.params;
  console.log(code_user);
  try {
    const usuarios = await usuario.findOne({
      where:{
        code_user,
      },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//Actualizar un Usuario
export const updateUsers = async (req, res) => {
  try {
    const { code_user } = req.params;
    console.log(code_user);

    const {username,correo,nombre,apellido,contraseña,code } = req.body;

    const usuario2 = await usuario.findByPk(code_user);
    usuario2.username = username;
    usuario2.correo = correo;
    usuario2.nombre = nombre;
    usuario2.apellido = apellido;
    usuario2.contraseña = contraseña;
    usuario2.code = code;

    await usuario2.save();
    res.json(usuario2);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Usuarios
export async function deleteUsers(req, res) {
  const {code_user} = req.params;
  try {
    await usuario.destroy({
      where: {
        code_user,
      },
    });
    /*res.json("eliminado");*/
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}