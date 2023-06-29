import { secret } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generarToken = (payload) => {
  const token = jwt.sign({ payload }, secret, {
    expiresIn: "2d",
  });
  return token;
};

 export const verificarToken=(token)=>{
      return  jwt.verify(token, secret)
 }
