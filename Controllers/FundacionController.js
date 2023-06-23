import {Categoria,Fundacion} from "../Models/index.js";

class FundacionController {
    constructor() {}
    getTodas = async (req, res) => {
      try {
        const result = await Fundacion.findAll({
          attributes: ["id", "nombre", "foto", "latitud","longitud","cbu","idcategoria"],
          include: [
            {
              model: Categoria,
              attributes: ["nombre"],
            },
          ]
        });
        if (result.length === 0) throw new Error("No hay fundaciones");
        res.status(200).send({
          success: true,
          message: "Estos son las fundaciones encontradas",
          result,
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };

    getPorId = async (req, res) => {
      try {
        const { id } = req.params;
        const result = await Fundacion.getTodas({
          attributes: ["id", "nombre", "foto", "latitud","longitud","cbu","idcategoria"],
          where: {
            id,
          },
        });
        if (result.length === 0) throw new Error("No hay fundacion con ese id");
        res.status(200).send({
          success: true,
          message: "Este la fundacion",
          result: result[0].dataValues,
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };

    crearFundacion = async (req, res) => {
      try {
        const {nombre, foto, latitud,longitud,cbu,idcategoria} = req.body;
        const result = await Fundacion.create({nombre,foto,latitud,longitud,cbu,idcategoria});
        if (!result) throw new Error("No se pudo crear la fundacion");
        res.status(200).send({
          success: true,
          message: "Se agregro la fundacion exitosamente",
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };

    modificarFundacion = async (req, res) => {
      try {
        const { id } = req.params;
        const {nombre, foto, latitud,longitud,cbu,idcategoria} = req.body;
        const result = await Fundacion.update(
          {nombre, foto, latitud,longitud,cbu },
          {
            where: {
              id,
            },
          }
        );
        if (result[0] === 0) throw new Error("No se pudo modificar la fundacion");
        res.status(200).send({
          success: true,
          message: "Fundacion Modificada exitosamente",
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          message: error.message,
        });
      }
    };
}

export default FundacionController;