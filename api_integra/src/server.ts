import express from "express";
import "express-async-errors";

import routes from "./routes/routes";
import { ErrorMiddleware } from "./middlewares/error";
import { Swagger } from "./middlewares/swagger";

const app = express();

//Configução do express para receber requisições em JSON
app.use(express.json());

Swagger(app);

//Rotas
app.use(routes);

//Tratar erros
app.use(ErrorMiddleware);

//Iniciar o servidor
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

export { app };
