import { Router } from "express";
import UsuarioController from "../Controllers/UsuarioController.js";
import validarLogin from "../middlewares/validarLogin.js";

const UsuarioRoutes = Router();
const usuarioController = new UsuarioController();

UsuarioRoutes.post("/", usuarioController.crearUsuario);
UsuarioRoutes.post("/login", usuarioController.iniciarSesion);
UsuarioRoutes.get("/yo", validarLogin, usuarioController.yo);
UsuarioRoutes.use(validarLogin);
UsuarioRoutes.post("/logout", usuarioController.cerrarSesion);

export default UsuarioRoutes;