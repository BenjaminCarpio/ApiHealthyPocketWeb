import { receta } from "../models/receta.js";

//Obtener Todas las recetas
export async function getReceta(req, res) {
    try {
      const receta2 = await receta.findAll({
        atributes: ["nombre","code_cita"],
      });
      res.json(receta2);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

//crear Receta
export async function CrearReceta(req, res) {
  
  const {nombre,code_med}=req.body;

  try{
      let newReceta = await receta.create(
          {
            nombre,code_med,
          },
          {
              fields: ["nombre","code_med"],
          }
      );
      console.log('si se pudo')
      return res.json(newReceta);
  }catch(error){
      res.status(500).json({
          message: error.message,
      });
      console.log('nose pudo carnal');
  }
  res.json("received");
  console.log(req.body);
}

//modificar Receta Especifica
export const UpdateReceta = async (req, res) => {
  try {
    const { code_rcta} = req.params;
    console.log(code_rcta);

    const {nombre,code_med } = req.body;

    const receta2 = await receta.findByPk(code_rcta);
    receta2.nombre = nombre;
    receta2.code_med = code_med;
    await receta2.save();

    res.json(receta2);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar Recetas
export async function EliminarReceta(req, res) {
  const {code_rcta} = req.params;
  try {
    await receta.destroy({
      where: {
        code_rcta,
      },
    });
    /*res.json("eliminado");*/
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

