import { UUID } from "sequelize";
import { rol } from "../models/rol.js";
import { usuario } from "../models/usuario.js";
import { cita } from "../models/cita.js";
//import { examen } from "../models/examen.js";
import { detalles } from "../models/detalles.js";

//Obtener Todos los detalles de todos los examenes
export async function getDetalles(req, res) {
    try {
      const detalle2 = await detalles.findAll({
        //atributes: ["nombre","code_cita"],
      });
      res.json(detalle2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//crear el detalle
export async function CrearDetalleExamen(req, res) {
  
  const {gasto,descripcion,fecha,hora,resultado,code_exam}=req.body;

  try{
      let NewDetalle = await detalles.create(
          {
            gasto,descripcion,fecha,hora,resultado,code_exam
          },
          {
              fields: ["gasto","descripcion","fecha","hora","resultado","code_exam"],
          }
      );
      console.log('si se pudo')
      return res.json(NewDetalle);
  }catch(error){
      res.status(500).json({
          message: error.message,
      });
      console.log('nose pudo carnal');
  }
  //res.json("received");
  console.log(req.body);
}

//modificar un detalle en especifico 
export const ModificarDetalle = async (req, res) => {
  try {
    const { code_det } = req.params;
    console.log(code_det);
    const {gasto,descripcion,fecha,hora,resultado,code_exam} = req.body;
    const detalle2 = await detalles.findByPk(code_det);
    detalle2.gasto = gasto;
    detalle2.descripcion = descripcion;
    detalle2.fecha = fecha;
    detalle2.hora = hora;
    detalle2.resultado = resultado;
    detalle2.code_exam = code_exam;
    await detalle2.save();
    res.json(detalle2);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar detalle
export async function EliminarDetalle(req, res) {
  const {code_det} = req.params;
  try {
    await detalles.destroy({
      where: {
        code_det,
      },
    });
    /*res.json("eliminado");*/
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


//Obtener todos los detalles de un Examen
export async function getOneExamDetail(req, res) {
  const {code_exam} = req.params;
  console.log(code_exam);
  try {
    const detail = await detalles.findAll({
      where:{
        code_exam,
      },
    });
    res.json(detail);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}