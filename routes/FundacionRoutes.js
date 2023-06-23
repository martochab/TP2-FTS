import { Router } from "express";
import FundacionController from "../Controllers/FundacionController.js";

const fundacionRoute = Router();
const fundacionController = new FundacionController();

fundacionRoute.get("/", fundacionController.getTodas);
fundacionRoute.get("/:id", fundacionController.getPorId);
fundacionRoute.post("/", fundacionController.crearFundacion);
fundacionRoute.put("/:id", fundacionController.modificarFundacion);

export default fundacionRoute;