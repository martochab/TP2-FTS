import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Categoria extends Model {}

Categoria.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
    },
  },
  { sequelize: connection, modelName: "Categoria" }
);

export default Categoria