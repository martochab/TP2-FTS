import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class Usuario extends Model {
  async validarContrasenia(passwordtextoPlano) {
    const passwordHass = await bcrypt.hash(passwordtextoPlano, this.salt);
    return this.contrasenia === passwordHass;
  }
}

Usuario.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
    },
    apellido: {
      type: DT.STRING,
      allowNull: false,
    },
    contrasenia: {
      type: DT.STRING,
      allowNull: false,
    },
    mail: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DT.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "Usuario",
    timestamps: false,
  }
);

Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt();
  usuario.salt = salt;

  const passwordHash = await bcrypt.hash(usuario.contrasenia, salt);
  usuario.contrasenia = passwordHash;
});

export default Usuario;
