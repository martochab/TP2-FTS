import {Categoria} from "../Models/index.js";

class CategoriaCotroller {
    constructor() {}
    getTodas = async (req, res) => {
      try {
        const result = await Categoria.findAll({
          attributes: ["id", "nombre"]
        });
        if (result.length === 0) throw new Error("No hay categorias");
        res.status(200).send({
          success: true,
          message: "Estos son las categorias encontradas",
          result,
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };

    crearCategoria = async (req, res) => {
      try {
        const {nombre, foto, latitud,longitud,cbu,idcategoria} = req.body;
        const result = await Categoria.create({nombre,foto,latitud,longitud,cbu,idcategoria});
        if (!result) throw new Error("No se pudo crear la categoria");
        res.status(200).send({
          success: true,
          message: "Se agregro la categoria exitosamente",
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };
}

export default CategoriaCotroller;