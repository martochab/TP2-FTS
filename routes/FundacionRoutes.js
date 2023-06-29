import { Router } from "express";
import FundacionController from "../Controllers/FundacionController.js";
import validarLogin from "../middlewares/validarLogin.js";

const fundacionRoute = Router();
const fundacionController = new FundacionController();

fundacionRoute.get("/", validarLogin,fundacionController.getTodas);
fundacionRoute.get("/:id",validarLogin, fundacionController.getPorId);
fundacionRoute.post("/", validarLogin,fundacionController.crearFundacion);
fundacionRoute.put("/:id",validarLogin, fundacionController.modificarFundacion);

export default fundacionRoute;