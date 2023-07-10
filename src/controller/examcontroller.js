import { UUID } from "sequelize";
import { rol } from "../models/rol.js";
import { usuario } from "../models/usuario.js";
import { cita } from "../models/cita.js";
import { examen } from "../models/examen.js";

//Obtener Todos los Examenes
export async function getExam(req, res) {
    try {
      const Exam2 = await examen.findAll({
        atributes: ["nombre","code_cita"],
      });
      res.json(Exam2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//crear examenes
export async function ExamenCreate(req, res) {
  
  const {nombre,code_cita}=req.body;

  try{
      let newExamen = await examen.create(
          {
            nombre,code_cita,
          },
          {
              fields: ["nombre","code_cita"],
          }
      );
      console.log('si se pudo')
      return res.json(newExamen);
  }catch(error){
      res.status(500).json({
          message: error.message,
      });
      console.log('nose pudo carnal');
  }
  //res.json("received");
  console.log(req.body);
}

//modificar Examen
export const UpdateExamen = async (req, res) => {
  try {
    const { code_exam } = req.params;
    console.log(code_exam);
    const {nombre,code_cita } = req.body;
    const examen2 = await examen.findByPk(code_exam);
    examen2.nombre = nombre;
    examen2.code_cita = code_cita;
    await examen2.save();
    res.json(examen2);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Examenes
export async function deleteExamenes(req, res) {
  const {code_exam} = req.params;
  try {
    await examen.destroy({
      where: {
        code_exam,
      },
    });
    /*res.json("eliminado");*/
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//Obtener todos los examenes por cita  
export async function getOneExam(req, res) {
  const {code_cita} = req.params;
  console.log(code_cita);
  try {
    const examen2 = await examen.findAll({
      where:{
        code_cita,
      },
    });
    res.json(examen2);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}