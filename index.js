import express from "express";
import connection from "./connection/connection.js";
const app = express();
import { serverPort } from "./config/config.js";
import routes from "./routes/Routes.js";
import cookieParser from "cookie-parser";

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ success: false, message: error.message });
});

await connection
  .sync({ force: false })
  .then(() => {
    app.listen(serverPort, () => {
      console.log(`server ok http://localhost:${serverPort}`);
    });
  });
