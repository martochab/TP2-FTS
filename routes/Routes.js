import { Router } from "express";
import fundacionRoute from "./FundacionRoutes.js";
import categoriaRoute from "./CategoriaRoutes.js";
const routes= Router()

routes.use("/fundaciones", fundacionRoute)
routes.use("/categorias", categoriaRoute)

export default routes
