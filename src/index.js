import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  await sequelize;  
  app.listen(25060);
  console.log("Server on port 3000");
}

main();
