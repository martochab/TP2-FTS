import { Sequelize } from "sequelize";
import {database,username,pasword,host,dialect,port} from "../config/config.js";

const connection = new Sequelize(database, username, pasword, { host,dialect,port});
try {
  await connection.authenticate();
  console.log("db connection ok");
} catch (error) {
  console.log(`error:${error}`);
}

export default connection;
