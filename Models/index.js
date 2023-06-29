import Fundacion from "./Fundacion.js";
import Categoria from "./Categoria.js";
import Usuario from "./Usuario.js";

Categoria.hasMany(Fundacion, {
  foreignKey: "idcategoria",
});
Fundacion.belongsTo(Categoria, {
  foreignKey: "idcategoria",
});

export { Categoria, Fundacion,Usuario };
