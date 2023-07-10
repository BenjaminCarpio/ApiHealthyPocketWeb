import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "defaultdb", // db name,
  "doadmin", // username
  "AVNS_dCh8VMyN9MsN3gticu6", // password
  {
    host: "db-healthy-pocket-do-user-14279557-0.b.db.ondigitalocean.com",
    dialect: "postgres",
    port:25060,
    dialectOptions:{
      ssl: {
        rejectUnauthorized: false,
      },
    }
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});