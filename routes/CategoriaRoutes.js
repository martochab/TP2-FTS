import { Router } from "express";
import CategoriaController from "../Controllers/CategoriaController.js";

const categoriaRoute = Router();
const categoriaController = new CategoriaController();

categoriaRoute.get("/", categoriaController.getTodas);
categoriaRoute.post("/", categoriaController.crearCategoria);

export default categoriaRoute;