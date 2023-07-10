import { UUID } from "sequelize";
import { rol } from "../models/rol.js";
import { usuario } from "../models/usuario.js";
import { cita } from "../models/cita.js";

//Obtener Todos los cita
export async function getcitas(req, res) {
    try {
      const cita2 = await cita.findAll({
        atributes: ["descripcion","fecha","tiempo_hos","precio","contraseña","code"],
      });
      res.json(cita2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}
//Crear Cita (por el momento el codigo de code_user se pasa por json en el req.body , pero es necesario setear este atributo desde el cliente)
export async function CreateCita(req, res) {
    
    const {descripcion,fecha,tiempo_hos,precio,code_user}=req.body;
    try{
        let newCita = await cita.create(
            {
                descripcion,fecha,tiempo_hos,precio,code_user
            },
            {
                fields: ["descripcion","fecha","tiempo_hos","precio","code_user"],
            }
        );
        console.log('se creo la cita exitosamente')
        return res.json(newCita);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
        console.log('nose pudo carnal');
    }
    //res.json("received");
    console.log(req.body);
}

//Actualizar un cita    por id
export const ModificarCita = async (req, res) => {
    try {
      const { code_cita } = req.params;
      console.log(code_cita);
  
      const {descripcion,fecha,tiempo_hos,precio,code_user } = req.body;
  
      const cita2 = await cita.findByPk(code_cita);
      
      cita2.descripcion = descripcion;
      cita2.fecha = fecha;
      cita2.tiempo_hos = tiempo_hos;
      cita2.precio = precio;
      cita2.code_user = code_user;
  
      await cita2.save();
      res.json(cita2);
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Eliminar cita
export async function deleteCita(req, res) {
    const { code_cita } = req.params;
    console.log(code_cita);
    try {
      await cita.destroy({
        where: {
          code_cita,
        },
      });
      /*res.json("eliminado");*/
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

//Obtener todas las citas de un solo USUARIO  

export async function getOnecita(req, res) {
  const {code_user} = req.params;
  console.log(code_user);
  try {
    const citas = await cita.findAll({
      where:{
        code_user,
      },
    });
    res.json(citas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}