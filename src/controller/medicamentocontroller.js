import { medicamento } from "../models/medicamento.js";

//Obtener Todos los Medicamentos
export async function getMedicamentos(req, res) {
    try {
      const medicamento2 = await medicamento.findAll({
        atributes: ["descripcion","hora,cantidad,code_rcta"],
      });
      res.json(medicamento2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//crear examenes
export async function CrearMedicamentos(req, res) {
  
  const {descripcion,hora,cantidad,code_rcta}=req.body;

  try{
      let newMedicamento = await medicamento.create(
          {
            descripcion,hora,cantidad,code_rcta,
          },
          {
              fields: ["descripcion","hora","cantidad","code_rcta"],
          }
      );
      console.log('si se pudo')
      return res.json(newMedicamento);
  }catch(error){
      res.status(500).json({
          message: error.message,
      });
      console.log('nose pudo carnal');
  }
  //res.json("received");
  console.log(req.body);
}

//modificar MEdicamento
export const ActualizarMedicamento = async (req, res) => {
  try {
    const { code_medca } = req.params;
    console.log(code_medca);

    const {descripcion,hora,cantidad,code_rcta} = req.body;
    const medicamento2 = await medicamento.findByPk(code_medca);

    medicamento2.descripcion = descripcion;
    medicamento2.hora = hora;
    medicamento2.cantidad = cantidad;
    medicamento2.code_rcta = code_rcta;

    await medicamento2.save();
    res.json(medicamento2);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Examenes
export async function EliminarMedicamento(req, res) {
  const {code_medca} = req.params;
  try {
    await medicamento.destroy({
      where: {
        code_medca,
      },
    });
    /*res.json("eliminado");*/
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

//Obtener Medicamentos Por Usuario
export async function getOneMedicamento(req, res) {
  const {code_rcta} = req.params;
  console.log(code_rcta);
  try {
    const medicamento2 = await medicamento.findAll({
      where:{
        code_rcta,
      },
    });
    res.json(medicamento2);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}