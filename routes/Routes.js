import { Router } from "express";
import fundacionRoute from "./FundacionRoutes.js";
import categoriaRoute from "./CategoriaRoutes.js";
import usuarioRoutes from "./UsuarioRoutes.js";
const routes= Router()

routes.use("/fundaciones", fundacionRoute)
routes.use("/categorias", categoriaRoute)
routes.use("/usuarios",usuarioRoutes)

export default routes
