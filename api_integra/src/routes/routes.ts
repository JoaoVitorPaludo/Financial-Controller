import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import { logoutController } from "../controllers/authentication/logoutController";
import { JwtMiddleware } from "../middlewares/jwt";
import { cnpjController } from "../service/cnpjController";
import transactionsRoutes from "./transactions.routes";
import usersRoutes from "./users.routes";
import cors from "cors";

const routes = Router();

routes.use(cors({ origin: "*" }));

// Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

// Rota de login
routes.post("/login", loginController);

// Rotas de usuários
routes.use("/users", usersRoutes);

//Filtro
routes.use(JwtMiddleware);

routes.get("/cnpj/:cnpj", cnpjController);

routes.post("/logout", logoutController);

routes.use("/transactions", transactionsRoutes);

export default routes;
