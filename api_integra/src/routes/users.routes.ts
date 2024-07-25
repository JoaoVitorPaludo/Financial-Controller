import { updateUserController } from "./../controllers/users/updateUserController";
import { Router } from "express";

import { listUsersController } from "../controllers/users/listUsersController";
import { createUserController } from "../controllers/users/createUserController";
import { deleteUserController } from "../controllers/users/deleteUserController";
import { findUserByIdController } from "../controllers/users/findUserByIdController";

const usersRoutes = Router();

/**
 * @openapi
 * /users:
 *  get:
 *   tags: [Usuários]
 *   summary: Busca todos os usuários
 *   description: Busca todos os usuários cadastrados no banco de dados
 *   responses:
 *    200:
 *     description: Listagem dos usuários
 */
usersRoutes.get("/", listUsersController);
// Endpoint para criar um usuário
usersRoutes.post("/create", createUserController);

// Endpoint para editar um usuário
usersRoutes.put("/update", updateUserController);

// Endpoint para deletar um usuário
usersRoutes.delete("/delete", deleteUserController);

// Endpoint para buscar um usuário
usersRoutes.get("/findById/:id", findUserByIdController);

export default usersRoutes;
