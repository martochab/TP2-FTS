import Fundacion from "./Fundacion.js";
import Categoria from "./Categoria.js";

Categoria.hasMany(Fundacion, {
  foreignKey: "idcategoria",
});
Fundacion.belongsTo(Categoria, {
  foreignKey: "idcategoria",
});

export { Categoria, Fundacion, };
