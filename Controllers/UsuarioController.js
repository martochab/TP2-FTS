import { Usuario } from "../Models/index.js";
import { generarToken, verificarToken } from "../utils/token.js";

class UsuarioComtroller {
  constructor() {}

  crearUsuario = async (req, res, next) => {
    try {
      const { nombre, apellido, contrasenia, mail } = req.body;
      const result = await Usuario.create({
        nombre,
        apellido,
        contrasenia,
        mail,
      });
      if (!result) {
        const error = new Error("No se pudo crear al usuario");
        error.status = 400;
        throw error;
      }
      res.status(200).send({
        success: true,
        message: "Usuario creado con exito",
        result,
      });
    } catch (error) {
      next(error);
    }
  };

  iniciarSesion = async (req, res, next) => {
    try {
      const { mail, contrasenia: passwordTextoPlano } = req.body;
      const result = await Usuario.findOne({
        where: {
          mail,
        },
      });
      if (!result) {
        const error = new Error("error de Credenciales");
        error.status = 400;
        throw error;
      }
      const comparePassword = await result.validarContrasenia(passwordTextoPlano);
      if (!comparePassword) {
        const error = new Error("error de Credenciales");
        error.status = 400;
        throw error;
      }

      const payload = {
        id: result.id,
        mail: result.mail,
      };

      const token = generarToken(payload);
      res.cookie("token", token);

      res.status(200).send({
        success: true,
        message: "Usuario logueado con exito",
      });

    } catch (error) {
      next(error);
    }
  };

  yo = (req, res, next) => {
    const { user } = req;
    res.status(200).send({
      success: true,
      message: "Usuario ok",
      result: user,
    });
  };

  cerrarSesion = (req, res, next) => {
    res.cookie("token", "");
    res.status(200).send({
      success: true,
      message: "Usuario deslogueado",
    });
  };
}

export default UsuarioComtroller;
