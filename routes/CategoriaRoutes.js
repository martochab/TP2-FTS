import { Router } from "express";
import CategoriaController from "../Controllers/CategoriaController.js";
import validarLogin from "../middlewares/validarLogin.js";

const categoriaRoute = Router();
const categoriaController = new CategoriaController();

categoriaRoute.get("/",validarLogin,categoriaController.getTodas);
categoriaRoute.post("/",validarLogin, categoriaController.crearCategoria);

export default categoriaRoute;