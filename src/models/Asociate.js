import { usuario } from "./usuario";
import { cita } from "./cita";
import { medico } from "./Medico";
import { examen } from "./examen";
import { detalles } from "./detalles";
import { receta } from "./receta";
import { medicamento} from "./medicamento";

//relacion bidireccional de la tabla usuario citas
usuario.hasMany(cita,{foreingKey: 'code_user'});
cita.belongsTo(usuario,{foreingKey: 'code_user'});

//relacion bidireccional de la tabla medico y citas
medico.hasMany(cita,{foreingKey:'code_cita'});
cita.belongsTo(medico,{foreingKey:'code_cita'});

//relacion bidereccional de la tbla examen y detalles de examenes
examen.belongsTo(detalles,{foreingKey:'code_exam'});
detalles.belongsTo(examen,{foreingKey:'code_exam'});

//relacion de la tabla receta y medicos
medico.hasMany(receta,{foreingKey:'code_med'});
receta.belongsTo(medico,{foreingKey:'code_med'});

//relacion de la tabla receta y medicamentos
receta.hasMany(medicamento,{foreingKey:'code_rcta'});
medicamento.hasMany(receta,{foreingKey:'code_rcta'});