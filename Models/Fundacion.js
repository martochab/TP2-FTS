import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class Fundacion extends Model {}

Fundacion.init(
    {
      nombre: {
        type: DT.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      foto: {
        type: DT.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      latitud: {
        type: DT.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      longitud: {
        type: DT.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      cbu: {
        type: DT.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
       idcategoria:{
          allowNull: false,
          type:DT.INTEGER
       }
    },
    {
      sequelize: connection,
      modelName: "Fundacion",
      timestamps:false
    }
  );
  
  export default Fundacion;
  