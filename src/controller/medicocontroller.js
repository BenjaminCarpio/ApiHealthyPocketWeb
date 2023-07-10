import { UUID } from "sequelize";
import { rol } from "../models/rol.js";
import { medico } from "../models/Medico.js";

//Obtener Todos losmedicos
export async function obtenerMedicos(req, res) {
    try {
      const medico2 = await medico.findAll({
      });
      res.json(medico2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

 //crear medicos
export async function CreateMedico(req, res) {
    const {nombre,especialidad,jvpm,code_cita}=req.body;

    try{
        let newMedico = await medico.create(
            {
                nombre,especialidad,jvpm,code_cita,
            },
            {
                fields: ["nombre","especialidad","jvpm","code_cita"],
            }
        );
        console.log('si se pudo')
        return res.json(newMedico);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
        console.log('nose pudo carnal');
    }
    //res.json("received");
    console.log(req.body);
}

//modificar medicos
export const updatemedico = async (req, res) => {
    try {
      const { code_med } = req.params;
      console.log(code_med);
  
      const {nombre,especialidad,jvpm,code_cita } = req.body;
  
      const medicos2 = await medico.findByPk(code_med);
      medicos2.nombre = nombre;
      medicos2.especialidad = especialidad;
      medicos2.jvpm = jvpm;
      medicos2.code_cita = code_cita;
  
      await medicos2.save();
      res.json(medicos2);
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

//Eliminar Medicos
export async function deletemedico(req, res) {
    const {code_med} = req.params;
    try {
      await medico.destroy({
        where: {
            code_med,
        },
      });
      /*res.json("eliminado");*/
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
