import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listUsersController = async (req: Request, res: Response) => {
  // Busca todos os usuários
  const usersList = await prismaClient.user.findMany();

  // Retorna a lista de usuários
  return res.json(usersList);
};

export { listUsersController };
